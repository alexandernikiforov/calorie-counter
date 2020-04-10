import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialDesignModule} from '../material-design/material-design.module';
import {AppRoutingModule} from '../app-routing.module';


@NgModule({
  declarations: [],
  imports: [
    AppRoutingModule,

    CommonModule,
    MaterialDesignModule
  ],
  exports: []
})
export class SharedModule {
}
