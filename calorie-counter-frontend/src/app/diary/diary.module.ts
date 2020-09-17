import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsumedFoodListComponent } from './consumed-food-list/consumed-food-list.component';
import { MaterialDesignModule } from '../material-design/material-design.module';
import { DiaryService } from './core/diary.service';
import { BrowserModule } from '@angular/platform-browser';
import { DiaryComponent } from './diary.component';
import { DiaryNavigationComponent } from './navigation/diary-navigation.component';
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [
    ConsumedFoodListComponent,
    DiaryComponent,
    DiaryNavigationComponent,
    ContentComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    MaterialDesignModule
  ],
  providers: [
    DiaryService
  ]
})
export class DiaryModule {
}
