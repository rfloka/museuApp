import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Peca } from '../peca';
import { Storage } from '@ionic/storage';
import { Observable, from } from 'rxjs';
import { NetworkService, ConnectionStatus } from '../services/network.service';

const API_STORAGE_KEY = 'ApiCache';

@Injectable({
  providedIn: 'root'
})
export class PecasdataService {
  token_key: string;
  url: any;
  constructor(private http: HttpClient, private networkService: NetworkService, private storage: Storage) {

  }
  token(url) {
    this.url = url;
    console.log("teste o url"+ this.url);
    var httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Headers': 'Content-Type',
        'Content-Type': 'application/json',
      })
    };
    this.http.post('https://' + this.url + '/auth/user/token', null, httpOptions).toPromise().then((data) => {
      this.token_key = data['token'];
    });
  }
  checkUrl(data) {
    return this.http.get('https://telesensis.com/museu.php?id=' + data[1]).toPromise();
  }
  getPecas(): Observable<Peca[]> {
    if (this.networkService.getCurrentNetworkStatus() == ConnectionStatus.Offline) {
      console.log("this is cache");
      return from(this.getLocalData('pecas'));
    } else {
      console.log("this is network");
      return this.http.get<Peca[]>('https://'+this.url+'/api/pecas');
    }
  }
  getAutores() {
    console.log("this is network");
    return this.http.get('https://'+this.url+'/api/autores');
  }
  async login(user) {
    console.log(this.token_key);
    let body = {
      "username": user[0],
      "password": user[1]
    }
    var httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Headers': 'Content-Type',
        'Content-Type': 'application/json',
        'X-CSRF-Token': this.token_key,
      })
    };
    return this.http.post('https://'+this.url+'/auth/user/login', body, httpOptions).toPromise();
  }
  register(user) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Headers': 'Content-Type',
        'Content-Type': 'application/json',
      })
    };
    let body = {
      "name": user[0],
      "mail": user[1],
      "pass": user[2]
    }
    return this.http.post('https://'+this.url+'/auth/user/register', body, httpOptions).toPromise();
  }
  logout() {
    console.log(this.token_key);
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Headers': 'Content-Type',
        'Content-Type': 'application/json',
        'X-CSRF-Token': this.token_key,
      })
    };
    return this.http.post('https://'+this.url+'/auth/user/logout', null, httpOptions).toPromise().then((data) => {
      console.log(data);
    }).catch((error) => {
      console.log(error);
    });
  }
  rate(rate) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Headers': 'Content-Type',
        'Content-Type': 'application/json',
        'X-CSRF-Token': this.token_key,
      })
    };
    return this.http.post('https://'+this.url+'/neovote/' + rate[0] + '/' + rate[1], null, httpOptions).toPromise().then((data) => {
      console.log(data);
    }).catch((error) => {
      console.log(error);
    });
  }
  setLocalData(key, data) {
    console.log("cache created?");
    this.storage.set(`${API_STORAGE_KEY}-${key}`, data);
  }

  // Get cached API result
  getLocalData(key) {
    return this.storage.get(`${API_STORAGE_KEY}-${key}`);
  }
}

