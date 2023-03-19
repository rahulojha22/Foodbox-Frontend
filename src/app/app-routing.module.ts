import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { PublicLayoutComponent } from './layout/public-layout/public-layout.component';
import { UserLayoutComponent } from './layout/user-layout/user-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'public/landing',
    pathMatch: 'full',
  }, {
    path: '',
    component: PublicLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('src/app/layout/public-layout/public-layout.module').then(m => m.PublicLayoutModule)
      }
    ]
  },{
    path: '',
    component: UserLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('src/app/layout/user-layout/user-layout.module').then(m => m.UserLayoutModule)
      }
    ]
  }, {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('src/app/layout/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
      }
    ]
  }, {
    path: '**',
    redirectTo: 'landing'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
