import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./diary/home/home.component";
import {FoodListComponent} from "./foods/food-list/food-list.component";


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'foods', component: FoodListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
