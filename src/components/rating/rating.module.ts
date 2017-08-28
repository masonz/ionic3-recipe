import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from 'ionic-angular';
import { RatingComponent } from './rating';

@NgModule({
  declarations: [
    RatingComponent,
  ],
  imports: [
    IonicModule,
    CommonModule
  ],
  exports: [
    RatingComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class RatingComponentModule { }
