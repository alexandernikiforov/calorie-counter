import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FoodsModule} from './foods/foods.module';
import {DiaryModule} from './diary/diary.module';
import {MaterialDesignModule} from './material-design/material-design.module';
import {SharedModule} from './shared/shared.module';
import {ToolbarComponent} from './shared/toolbar/toolbar.component';
import {NavigationComponent} from './shared/navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent, ToolbarComponent, NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialDesignModule,
    // feature modules
    FoodsModule,
    DiaryModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
