import { Component, OnInit } from '@angular/core';
import { PecasdataService } from 'src/app/api/pecasdata.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  erro: boolean = false;
  response: any;
  constructor(public api: PecasdataService, public formBuilder: FormBuilder, public auth: AuthenticationService) {
    this.loginForm = this.formBuilder.group({
      password: new FormControl('', Validators.compose([
        Validators.required
      ])),
      username: new FormControl('', Validators.compose([
        Validators.required
      ]))
    });
  }

  ngOnInit() {
  }
  async login() {
    let user = [this.loginForm.value.username, this.loginForm.value.password];
    await this.api.login(user).then((data) => {
      console.log(JSON.stringify(data));
      this.response = data
    }).catch((error) => {
      console.log(JSON.stringify(error));
      this.response = error['status'];
    });
    if (this.response == 401) {
      this.erro = true;
    } else {
      this.auth.login(this.response);
    }
  }
}
