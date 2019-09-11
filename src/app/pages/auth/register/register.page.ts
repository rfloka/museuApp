import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { PecasdataService } from 'src/app/api/pecasdata.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup;
  erro: boolean = false;
  erro_messagem = "";
  response: any;
  error_messages = {
    'username': [
      { type: 'required', message: 'Username é obrigatório' },
      { type: 'minlength', message: 'Username tem que ter no mínimo 2 caracteres' },
      { type: 'maxlength', message: 'Username tem que ter no máximo 30 caracteres' }
    ],
    'email': [
      { type: 'required', message: 'Email é obrigatório' },
      { type: 'minlength', message: 'Email tem que ter no mínimo 6 caracteres' },
      { type: 'maxlength', message: 'Email tem que ter no máximo 60 caracteres' },
      { type: 'pattern', message: 'Email tem que ter válido' }
    ],
    'password': [
      { type: 'required', message: 'Password é obrigatório' },
      { type: 'minlength', message: 'Password tem que ter no mínimo 6 caracteres' },
      { type: 'maxlength', message: 'Password tem que ter no máximo 30 caracteres' }
    ],
  };
  constructor(public api: PecasdataService, public formBuilder: FormBuilder, public auth: AuthenticationService, public router: Router) {
    this.registerForm = this.formBuilder.group({
      username: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(30),
      ])),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(60),
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'),
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30),
      ]))
    });
  }

  ngOnInit() {
  }
  async registar() {
    let user = [this.registerForm.value.username, this.registerForm.value.email, this.registerForm.value.password];
    await this.api.register(user).then((data) => {
      let user_login = [this.registerForm.value.username, this.registerForm.value.password];
      console.log("urra" + data);
      this.router.navigate(['/entrar/login']);
    }).catch((error) => {
      console.log(error.statusText);
      this.erro_messagem = error.statusText;
      this.erro = true;

    });
  }

}
