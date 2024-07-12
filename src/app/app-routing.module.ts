import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { YsiprobamosProductsComponent } from './components/ysiprobamos-products/ysiprobamos-products.component';
import { YsiprobamosAboutComponent } from './components/ysiprobamos-about/ysiprobamos-about.component';
import { YsiprobamosContactComponent } from './components/ysiprobamos-contact/ysiprobamos-contact.component';
import { PayFormComponent } from './components/pay-form/pay-form.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full',
  },
  {
    path: 'products',
    component: YsiprobamosProductsComponent,
  },
  {
    path: 'about',
    component: YsiprobamosAboutComponent,
  },
  {
    path: 'contact',
    component: YsiprobamosContactComponent,
  },
  {
    path: 'pay',
    component: PayFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
