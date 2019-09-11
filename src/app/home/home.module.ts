import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomePage } from './home.page';
import { SharedpecasModule } from '../components/sharedpecas.module';
import { FilterComponent } from '../components/filter/filter.component';
import { BluetoothLE } from '@ionic-native/bluetooth-le/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ]),
    SharedpecasModule
  ],
  providers: [
    BluetoothLE
  ],
  declarations: [HomePage, FilterComponent]
})
export class HomePageModule {


}
