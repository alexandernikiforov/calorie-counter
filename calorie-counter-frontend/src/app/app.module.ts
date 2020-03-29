import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FoodsModule} from "./foods/foods.module";
import {DiaryModule} from "./diary/diary.module";
import {MaterialDesignModule} from "./material-design/material-design.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialDesignModule,
    FoodsModule,
    DiaryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}