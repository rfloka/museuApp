import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PecasdataService } from '../../api/pecasdata.service';
import { SqlPecaCrudService } from 'src/app/sql/sql-peca-crud.service';
import { PecaSql } from 'src/app/models/sqlpeca';
import { StreamingMedia, StreamingAudioOptions } from '@ionic-native/streaming-media/ngx';
import { PickerController, ToastController } from '@ionic/angular';
import { AuthenticationService } from 'src/app/services/authentication.service';


@Component({
  selector: 'app-pecadetails',
  templateUrl: './pecadetails.page.html',
  styleUrls: ['./pecadetails.page.scss']
})
export class PecadetailsPage implements OnInit {
  toast: any;
  id;
  nid: number
  peca: any;
  guardado: boolean = false;
  notas: boolean = false;
  userTxt: string = "";
  urlchange = false;
  constructor(
    private route: ActivatedRoute,
    private pecasdata: PecasdataService,
    private pecasql: SqlPecaCrudService,
    private audio: StreamingMedia,
    private pickerCtrl: PickerController,
    public auth: AuthenticationService,
    public toastController: ToastController,

  ) { }
  async ngOnInit() {
    if (this.route.snapshot.paramMap.get('last') == 'user') {
      this.urlchange = true;
    }
    this.id = this.route.snapshot.paramMap.get('id');
    this.pecasdata.getPecas().subscribe((data) => {
      for (let i = 0; i < data.length; i++) {
        if (data[i].Nid == this.id) {
          this.peca = data[i];
          console.log(this.peca.Nid);
          let rating = this.peca.rating.split("/");
          rating = parseFloat(rating[0]);
          rating = Math.round(rating);
          this.peca.rating = rating;
          this.nid = parseInt(this.peca.Nid);
          this.pecasql.getData(this.nid).then((data) => {
            if (data == null) {
              let pecadata = new PecaSql(this.nid, "", 0);
              this.pecasql.insert(pecadata).then((data) => console.log("data inserted " + data));
            } else if (data.guardado == 1) {
              this.guardado = true;
              this.userTxt = data.notas;
            }
          });
        }
      }
    });

  };

  guardar() {
    let peca = new PecaSql(this.nid, "", 1);
    this.pecasql.update(peca);
    this.guardado = true;
  }
  naoGuardar() {
    let peca = new PecaSql(this.nid, "", 0);
    this.pecasql.update(peca);
    this.guardado = false;
  }

  changeDisplay() {
    this.notas = !this.notas;
  }
  async receberNota(data) {
    let guardado: number;
    await this.pecasql.getData(this.nid).then((data) => {
      guardado = data.guardado;
    });
    let peca = new PecaSql(this.nid, data, guardado);
    this.pecasql.update(peca);
  }
  som() {
    let options: StreamingAudioOptions = {
      initFullscreen: false
    }
    this.audio.playAudio(this.peca.audio, options);
  }
  check() {
    if (!this.auth.isAuthenticated()) {
      this.toast = this.toastController
        .create({
          message: "Tem que estar autenticado",
          duration: 2000
        })
        .then(toastData => {
          console.log(toastData);
          toastData.present();
        });
    } else {
      this.showRate()
    }
  }

  async showRate() {
    const picker = await this.pickerCtrl.create({
      animated: true,

      buttons: [{
        text: 'OK',
        handler: (val) => {
          let rate = [val['rating'].value, this.nid]
          this.pecasdata.rate(rate);
          picker.dismiss();
          this.toast = this.toastController
            .create({
              message: "Peça avaliada com " + val['rating'].text + " estrelas",
              duration: 2000
            })
            .then(toastData => {
              console.log(toastData);
              toastData.present();
            });
        }
      }],
      columns: [
        {
          name: 'rating',
          options: [
            {
              text: '1',
              value: '20'
            },
            {
              text: '2',
              value: '40'
            },
            {
              text: '3',
              value: '60'
            },
            {
              text: '4',
              value: '80'
            },
            {
              text: '5',
              value: '100'
            }
          ]
        }
      ],
      cssClass: 'ratepick',
    });
    picker.present();
  }
}
