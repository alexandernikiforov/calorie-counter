import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodListComponent } from './foods/food-list/food-list.component';
import { DiaryComponent } from './diary/diary.component';

const routes: Routes = [
  {path: '', component: DiaryComponent},
  {path: 'foods', component: FoodListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
