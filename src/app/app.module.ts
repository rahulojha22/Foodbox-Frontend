import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLayoutComponent } from './layout/user-layout/user-layout.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { PublicLayoutComponent } from './layout/public-layout/public-layout.component';
import { LandingPageComponent } from './Pages/landing-page/landing-page.component';
import { NavbarComponent } from './Components/public-components/navbar/navbar.component';
import { CarouselComponent } from './Components/public-components/carousel/carousel.component';
import { PageFooterComponent } from './Components/public-components/page-footer/page-footer.component';
import { ProductSectionComponent } from './Components/public-components/product-section/product-section.component';
import { ProfilePageComponent } from './Pages/profile-page/profile-page.component';
import { HomePageComponent } from './Pages/admin-pages/home-page/home-page.component';
import { ManageProductComponent } from './Pages/admin-pages/manage-product/manage-product.component';
import { ManageCarouselComponent } from './Pages/admin-pages/manage-carousel/manage-carousel.component';
import { ManageOrderComponent } from './Pages/admin-pages/manage-order/manage-order.component';
import { SalesReportComponent } from './Pages/admin-pages/sales-report/sales-report.component';
import { AdminNavbarComponent } from './Components/admin-components/admin-navbar/admin-navbar.component';
import { LoginComponent } from './Components/public-components/login/login.component';
import { SignUpComponent } from './Components/public-components/sign-up/sign-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminFooterComponent } from './Components/admin-components/admin-footer/admin-footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import { DragImageDirective } from './directives/drag-image.directive'
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { AddProductComponent } from './Pages/admin-pages/add-product/add-product.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CartComponent } from './Pages/user-pages/cart/cart.component';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [
    AppComponent,
    UserLayoutComponent,
    AdminLayoutComponent,
    PublicLayoutComponent,
    LandingPageComponent,
    NavbarComponent,
    CarouselComponent,
    PageFooterComponent,
    ProductSectionComponent,
    ProfilePageComponent,
    HomePageComponent,
    ManageProductComponent,
    ManageCarouselComponent,
    ManageOrderComponent,
    SalesReportComponent,
    AdminNavbarComponent,
    LoginComponent,
    SignUpComponent,
    AdminFooterComponent,
    DragImageDirective,
    AddProductComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    MatTooltipModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
