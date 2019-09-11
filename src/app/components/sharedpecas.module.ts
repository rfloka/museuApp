import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PecasComponent } from './pecas/pecas.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [PecasComponent],
  imports: [CommonModule, IonicModule],
  exports: [PecasComponent]
})
export class SharedpecasModule {}
