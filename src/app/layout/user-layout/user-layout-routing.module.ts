import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from 'src/app/Pages/user-pages/cart/cart.component';

const routes: Routes = [
  { path: 'user', children : [
    { path: 'cart',                  component: CartComponent },
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserLayoutRoutingModule { }
