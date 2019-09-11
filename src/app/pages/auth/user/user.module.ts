import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule, Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { UserPage } from './user.page';
import { AuthenticationService } from 'src/app/services/authentication.service';

const routes: Routes = [
  {
    path: '',
    component: UserPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UserPage]
})
export class UserPageModule {
  constructor(public authenticationService: AuthenticationService, public router: Router) {

  }


}
