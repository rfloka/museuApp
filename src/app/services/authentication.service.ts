import { Platform } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { PecasdataService } from '../api/pecasdata.service';

const TOKEN_KEY = 'auth-token';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  authenticationState = new BehaviorSubject(false);

  constructor(private storage: Storage, private plt: Platform, public router: Router, private pecasdata: PecasdataService
  ) {
    this.plt.ready().then(() => {
      this.checkToken();
    });
  }
  checkToken() {
    this.storage.get(TOKEN_KEY).then(res => {
      if (res) {
        this.authenticationState.next(true);
      }
    })
  }
  login(user) {
    console.log(user["user"].name);
    return this.storage.set(TOKEN_KEY, user["user"].name).then(() => {
      this.authenticationState.next(true);
      this.router.navigate(['/entrar/user']);
    });
  }
  logout() {
    return this.storage.remove(TOKEN_KEY).then(() => {
      this.pecasdata.logout();
      this.authenticationState.next(false);
      this.router.navigate(['/home']);
    });
  }
  isAuthenticated() {
    return this.authenticationState.value;
  }
}
