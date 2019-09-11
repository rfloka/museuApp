import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainPage } from './main.page';
import { AuthGuard } from 'src/app/guards/auth.guard';


const routes: Routes = [
  {
    path: '',
    component: MainPage,
    children: [
      {
        path: 'login',
        loadChildren: '../login/login.module#LoginPageModule'
      },
      {
        path: 'registar',
        loadChildren: '../register/register.module#RegisterPageModule'
      },
    ]

  },
  { path: 'user', loadChildren: '../user/user.module#UserPageModule', canActivate: [AuthGuard] },
  {
    path: '',
    redirectTo: 'user'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MainPage],
  providers: [AuthGuard]
})
export class MainPageModule {


}
