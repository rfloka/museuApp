import { Component, OnInit } from "@angular/core";
import { UniqueDeviceID } from "@ionic-native/unique-device-id/ngx";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from "@angular/forms";
import { PecasdataService } from "src/app/api/pecasdata.service";
import {
  InAppBrowser,
  InAppBrowserOptions
} from "@ionic-native/in-app-browser/ngx";
import { Router } from "@angular/router";

@Component({
  selector: "app-back-check",
  templateUrl: "./back-check.page.html",
  styleUrls: ["./back-check.page.scss"]
})
export class BackCheckPage implements OnInit {
  idform: FormGroup;
  erro: boolean = false;
  uuid: any;
  response: any;
  browser: any;
  error_messages = {
    serverid: [{ type: "required", message: "Código é obrigatório" }]
  };
  constructor(
    private uniqueDeviceID: UniqueDeviceID,
    public formBuilder: FormBuilder,
    public api: PecasdataService,
    private iab: InAppBrowser,
    public navCtrl: Router
  ) {
    this.idform = this.formBuilder.group({
      serverid: new FormControl('', Validators.compose([
        Validators.required
      ]))
    });
  }
  ngOnInit() {
    this.uniqueDeviceID
      .get()
      .then((uuid: any) => (this.uuid = uuid))
      .catch((error: any) => console.log(error));
  }
  async check() {
    var browseOptions: InAppBrowserOptions = {
      toolbarcolor: "#E72F37",
      clearcache: "yes",
      closebuttoncaption: "Continuar",
      hideurlbar: "yes",
      closebuttoncolor: "#FFFCF2"
    };
    let url;
    let data = [this.idform.value.serverid, this.uuid];
    console.log("almost ready" + data);
    await this.api.checkUrl(data).then(data => {
      let code = this.idform.value.serverid.toString();
      url = data[code];
    });
    if (url == undefined) {
      this.erro = true;
    } else {
      this.api.token(url);
      this.browser = this.iab.create(
        "https:" + url + "/content/bem-vindo",
        null,
        browseOptions
      );
      this.browser.show();
      /*this.browser.on("exit").subscribe(
        () => {
          console.log("browser closed");*/
          this.navCtrl.navigate(["/home"]);
        /*},
        err => {
          console.error(err);
        }
      );*/
    }
  }
}
