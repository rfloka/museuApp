import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PecadetailsPage } from './pecadetails.page';
import { NotaComponent } from 'src/app/components/nota/nota.component';
import { StreamingMedia } from '@ionic-native/streaming-media/ngx';

const routes: Routes = [
  {
    path: ':id/:last',
    component: PecadetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PecadetailsPage, NotaComponent],
  providers: [StreamingMedia]
})
export class PecadetailsPageModule { }
