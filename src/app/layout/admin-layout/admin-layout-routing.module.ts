import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from 'src/app/Pages/admin-pages/add-product/add-product.component';
import { HomePageComponent } from 'src/app/Pages/admin-pages/home-page/home-page.component';
import { ManageCarouselComponent } from 'src/app/Pages/admin-pages/manage-carousel/manage-carousel.component';
import { ManageOrderComponent } from 'src/app/Pages/admin-pages/manage-order/manage-order.component';
import { ManageProductComponent } from 'src/app/Pages/admin-pages/manage-product/manage-product.component';
import { SalesReportComponent } from 'src/app/Pages/admin-pages/sales-report/sales-report.component';

const routes: Routes = [
  { path: 'admin', children : [
    { path: 'home',                  component: HomePageComponent },
    { path: 'carousel',              component: ManageCarouselComponent },
    { path: 'order',                 component: ManageOrderComponent },
    { path: 'sales',                 component: SalesReportComponent },
    { path: 'product',               component: ManageProductComponent },
    { path: 'add-product',           component: AddProductComponent },
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminLayoutRoutingModule { }
