import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from 'src/app/Pages/landing-page/landing-page.component';

const routes: Routes = [
  { path: 'public', children : [
    { path: 'landing',                  component: LandingPageComponent },    
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicLayoutRoutingModule { }
