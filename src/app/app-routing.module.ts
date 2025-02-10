import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./components/pages/main/main.component";
import {AboutComponent} from "./components/pages/about/about.component";
import {ProductsComponent} from "./components/pages/products/products.component";
import {OrderComponent} from "./components/pages/order/order.component";

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'about', component: AboutComponent},
  {path: 'order', component: OrderComponent},
  {path: 'products', component: ProductsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {anchorScrolling: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
