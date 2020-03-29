import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FoodListComponent} from "./food-list/food-list.component";
import {MaterialDesignModule} from "../material-design/material-design.module";

@NgModule({
  declarations: [
    FoodListComponent
  ],
  imports: [
    CommonModule,
    MaterialDesignModule
  ]
})
export class FoodsModule {
}
