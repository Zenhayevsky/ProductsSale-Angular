import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContentHomeComponent } from './Views/content-home/content-home.component';
import { ProductCrudComponent } from './Views/product-crud/product-crud.component';

const routes: Routes = [
{
  path: "",
  component: ContentHomeComponent
}, 
{ 
  path: "products",
  component: ProductCrudComponent

}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
