import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Storage } from '@ionic/storage';
import { PecasdataService } from 'src/app/api/pecasdata.service';
import { SqlPecaCrudService } from 'src/app/sql/sql-peca-crud.service';

const TOKEN_KEY = 'auth-token';


@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {
  username: string;
  pecas: any;
  lastpage = "user";
  constructor(
    public auth: AuthenticationService,
    public storage: Storage,
    public pecasdata: PecasdataService,
    public sql: SqlPecaCrudService,
  ) { }
  ngOnInit() {
    this.pecasdata.getPecas().subscribe(data => {
      this.pecas = data;
      this.pecasdata.setLocalData('pecas', data);
      for (let i = 0; i < this.pecas.length; i++) {
        let rating = this.pecas[i].rating.split("/");
        rating = parseFloat(rating[0]);
        rating = Math.round(rating);
        this.pecas[i].rating = rating;
      }
      this.pecas[0].expanded = false;
      for (let i = 0; i < this.pecas.length; i++) {
        let nid = parseInt(this.pecas[i].Nid)
        this.sql.getData(nid).then((data) => {
          if (data != null) {
            this.pecas[i].visto = 1;
            if (data.guardado === 1) {
              this.pecas[i].guardado = 1;
            }
          }
        })
      }
    });
    this.storage.get(TOKEN_KEY).then(res => {
      if (res) {
        this.username = res;
      }
    })
  }
  logout() {
    this.auth.logout();
  }
}
