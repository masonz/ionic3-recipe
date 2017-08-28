import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChefPage } from './chef';
import { ShrinkingHeaderComponentModule } from '../../components/shrinking-header/shrinking-header.module';

@NgModule({
  declarations: [
    ChefPage
  ],
  imports: [
    IonicPageModule.forChild(ChefPage),
    ShrinkingHeaderComponentModule
  ],
  exports: [
    ChefPage
  ]
})
export class ChefPageModule { }
