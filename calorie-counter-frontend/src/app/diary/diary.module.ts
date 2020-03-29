import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from "./home/home.component";
import {MaterialDesignModule} from "../material-design/material-design.module";
import {DiaryService} from "./core/diary.service";

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    MaterialDesignModule
  ],
  providers: [
    DiaryService
  ]
})
export class DiaryModule {
}
