import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {ProductComponent} from './components/product/product.component';
import {CartComponent} from './components/cart/cart.component';
import {CheckOutComponent} from './components/check-out/check-out.component';
import {ThanksComponent} from './components/thanks/thanks.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'products/:id', component: ProductComponent},
  { path: 'cart', component: CartComponent},
  { path: 'checkout', component: CheckOutComponent},
  { path: 'thanks', component: ThanksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
