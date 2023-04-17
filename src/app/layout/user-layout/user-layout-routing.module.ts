import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from 'src/app/Pages/landing-page/landing-page.component';
import { CartComponent } from 'src/app/Pages/user-pages/cart/cart.component';
import { OrderPageComponent } from 'src/app/Pages/user-pages/order-page/order-page.component';
import { OrderSummaryComponent } from 'src/app/Pages/user-pages/order-summary/order-summary.component';
import { PaymentPageComponent } from 'src/app/Pages/user-pages/payment-page/payment-page.component';

const routes: Routes = [
  { path: 'user', children : [
    { path: 'cart',                  component: CartComponent },
    { path: 'order-summary',                  component: OrderSummaryComponent },
    { path: 'landing',               component: LandingPageComponent },
    { path: 'payment',               component: PaymentPageComponent }, 
    { path: 'orders',               component: OrderPageComponent },    
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserLayoutRoutingModule { }
