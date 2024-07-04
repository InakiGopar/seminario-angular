import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { FormsModule } from '@angular/forms';
import { YsyprobamosAboutComponent } from './components/ysyprobamos-about/ysyprobamos-about.component';
import { YsyprobamosProductsComponent } from './components/ysyprobamos-products/ysyprobamos-products.component';
import { InputIntegerComponent } from './components/input-integer/input-integer.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    ShoppingCartComponent,
    YsyprobamosAboutComponent,
    YsyprobamosProductsComponent,
    InputIntegerComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
