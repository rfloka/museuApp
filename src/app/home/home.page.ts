import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Platform, ToastController, IonList, IonItem } from "@ionic/angular";
import { BluetoothLE } from "@ionic-native/bluetooth-le/ngx";
import { PecasdataService } from "../api/pecasdata.service";
import { SqlPecaCrudService } from "src/app/sql/sql-peca-crud.service";
import { Router, NavigationEnd } from "@angular/router";
import { AndroidPermissions } from "@ionic-native/android-permissions/ngx";
import { interval, Subscription } from "rxjs";
import { AlertController } from '@ionic/angular';

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage implements OnInit {
  @ViewChild(IonList, { read: ElementRef }) list: ElementRef;
  esconder: boolean = true;
  toast: any;
  onexpand: boolean = false;
  rssi = -100;
  beacons: any[] = [];
  pecas: any;
  isVisible: boolean = true;
  lastpage = "home";
  behavior = "smooth";
  block = "start";
  scrollTo = null;
  subscription: Subscription;
  tempo = interval(10000);
  backButtonSubscription;
  constructor(
    private androidPermissions: AndroidPermissions,
    private router: Router,
    private plt: Platform,
    public bluetoothle: BluetoothLE,
    private pecasdata: PecasdataService,
    public toastController: ToastController,
    public sql: SqlPecaCrudService,
    public alertController: AlertController
  ) {
    this.plt.ready().then(readySource => {
      router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          this.ngOnInit();
        }
      });
      console.log("Platform ready from", readySource);
      this.androidPermissions
        .checkPermission(
          this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION
        )
        .then(
          result => console.log("Has permission?", result.hasPermission),
          err =>
            this.androidPermissions.requestPermission(
              this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION
            )
        );
      this.bluetoothle
        .requestPermission()
        .then(() => {
          this.bluetoothle.initialize().subscribe(ble => {
            console.log("ble status:", ble.status); // logs 'enabled'
            if (ble.status == 'disabled'){
              this.presentAlert();
            }
          });
          this.bluetoothle
            .startScan(null)
            .subscribe(device => this.onDeviceDiscovered(device, this.pecas));
          setTimeout(() => {
            this.bluetoothle.stopScan();
          }, 3000);
        })
        .catch(e => {
          console.log("OLA"+e);
        });
    });
  }
  async ngOnInit() {
    await this.pecasdata.getPecas().subscribe(data => {
      this.pecas = data;
      this.pecasdata.setLocalData("pecas", data);
      for (let i = 0; i < this.pecas.length; i++) {
        let rating = this.pecas[i].rating.split("/");
        rating = parseFloat(rating[0]);
        rating = Math.round(rating);
        this.pecas[i].rating = rating;
        this.pecas[i].expanded = false;
      }

      for (let i = 0; i < this.pecas.length; i++) {
        let nid = parseInt(this.pecas[i].Nid);
        this.sql.getData(nid).then(data => {
          if (data != null) {
            this.pecas[i].visto = 1;
            if (data.guardado === 1) {
              this.pecas[i].guardado = 1;
            }
          }
        });
      }
    });
  }
  ionViewWillEnter(){
    this.scan();
    this.subscription = this.tempo.subscribe(() => this.scan());
    this.backButtonSubscription = this.plt.backButton.subscribe(() => {
      navigator['app'].exitApp();
    });
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      subHeader: 'Bluetooth Desligado',
      message: 'Se estiver num museu com beacons ative bluetooth para ter a melhor experiência.',
      buttons: ['OK']
    });

    await alert.present();
  }

  scan() {
    this.rssi = -70;
    this.beacons = [];
    this.bluetoothle
      .startScan(null)
      .subscribe(device => this.onDeviceDiscovered(device, this.pecas));
    setTimeout(() => {
      this.bluetoothle.stopScan();
    }, 3000);
  }

  onDeviceDiscovered(device, data) {
    console.log("beacon:", device);
    var peca;
    if (device.rssi > this.rssi) {
      this.rssi = device.rssi;
      for (let i = 0; i < data.length; i++) {
        if (device.address === data[i].Address) {
          this.beacons.push(device);
          peca = data[i];
          console.log("beacon rssi menor:", device);
          break;
        }
      }
      if (peca != []) {
        setTimeout(() => {
          this.beaconMatch(peca);
          console.log('teste');
        }, 3100); 
      }else{
        this.showToast('Não foram encontradas peças');
      }
    }
  }
  beaconMatch(peca): void {
    console.log('Pecaaa '+peca)
    this.expandPeca(peca);
    this.scrollListVisible(this.pecas.indexOf(peca));
  }
  expandPeca(peca): void {
    if (peca.expanded) {
      peca.expanded = false;
      this.isVisible = true;
      this.onexpand = false;
      console.log("expandPeca if");
    } else {
      console.log("expandPeca else");
      this.onexpand = true;
      this.pecas.map(listPeca => {
        if (peca == listPeca) {
          listPeca.expanded = !listPeca.expanded;
          this.isVisible = false;
        } else {
          listPeca.expanded = false;
          this.isVisible = true;
        }
        return listPeca;
      });
    }
  }
  showToast(messagem) {
    this.toast = this.toastController
      .create({
        message: messagem,
        duration: 1500
      })
      .then(toastData => {
        console.log(toastData);
        toastData.present();
      });
  }
  change() {
    this.esconder = !this.esconder;
  }
  receberfiltros(filtros) {
    console.log(filtros);
    for (let i = 0; i < this.pecas.length; i++) {
      this.pecas[i].filtra = false;
      if (filtros[0].MyVisit === true) {
        if (this.pecas[i].guardado == null || this.pecas[i].guardado == 0) {
          this.pecas[i].filtra = true;
        }
      }
      if (filtros[0].Vistas === true) {
        if (this.pecas[i].visto === 1) {
          this.pecas[i].filtra = true;
        }
      }
      if (filtros[0].Ratings.length > 0) {
        this.pecas[i].filtra = true;
        for (let j = 0; j < filtros[0].Ratings.length; j++) {
          if (filtros[0].Ratings[j] == this.pecas[i].rating) {
            this.pecas[i].filtra = false;
          }
        }
      }
      if (filtros[0].Autores.length > 0) {
        this.pecas[i].filtra = true;
        for (let j = 0; j < filtros[0].Autores.length; j++) {
          if (filtros[0].Autores[j] === this.pecas[i].Autor) {
            this.pecas[i].filtra = false;
          }
        }
      }
      console.log(this.pecas[i]);
    }
  }
  scrollListVisible(index) {
    let arr = this.list.nativeElement.children;
    let item = arr[index];
    console.log(item);
    item.scrollIntoView({ behavior: this.behavior, block: this.block });
  }
  ionViewWillLeave(){
    this.subscription.unsubscribe();
    this.backButtonSubscription.unsubscribe();
  }
}