import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRestaurentComponent } from './add-restaurent/add-restaurent.component';
import { HomeComponent } from './home/home.component';
import { ListRestaurentComponent } from './list-restaurent/list-restaurent.component';
import { UpdateRestaurentComponent } from './update-restaurent/update-restaurent.component';

const routes: Routes = [
  {
    path: "home",component:HomeComponent
  },
  {
    path: "add", component:AddRestaurentComponent
  },
  {
    path:"update/:id", component:UpdateRestaurentComponent
  },
  {
    path: "list", component:ListRestaurentComponent
  },
  {
    path:"", redirectTo:"home", pathMatch:"full"
  },
  {
    path:"**", redirectTo:"home"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
