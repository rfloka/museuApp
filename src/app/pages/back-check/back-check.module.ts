import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx';
import { ReactiveFormsModule } from '@angular/forms';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

import { IonicModule } from '@ionic/angular';

import { BackCheckPage } from './back-check.page';

const routes: Routes = [
  {
    path: '',
    component: BackCheckPage
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
  providers: [
    UniqueDeviceID,
    InAppBrowser
  ],
  declarations: [BackCheckPage]
})
export class BackCheckPageModule { }
