import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { YsyprobamosProductsComponent } from './components/ysyprobamos-products/ysyprobamos-products.component';
import { YsyprobamosAboutComponent } from './components/ysyprobamos-about/ysyprobamos-about.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full',
  },
  {
    path: 'products',
    component: YsyprobamosProductsComponent,
  },
  {
    path: 'about',
    component: YsyprobamosAboutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
