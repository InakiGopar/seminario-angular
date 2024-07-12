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
import { YsiprobamosAboutComponent } from './components/ysiprobamos-about/ysiprobamos-about.component';
import { YsiprobamosProductsComponent } from './components/ysiprobamos-products/ysiprobamos-products.component';
import { InputIntegerComponent } from './components/input-integer/input-integer.component';
import { HttpClientModule } from '@angular/common/http';
import { YsiprobamosContactComponent } from './components/ysiprobamos-contact/ysiprobamos-contact.component';
import { PayFormComponent } from './components/pay-form/pay-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    ShoppingCartComponent,
    YsiprobamosAboutComponent,
    YsiprobamosProductsComponent,
    InputIntegerComponent,
    YsiprobamosContactComponent,
    PayFormComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
