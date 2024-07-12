import { Component } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { Product } from '../products-list/Product';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-pay-form',
  templateUrl: './pay-form.component.html',
  styleUrl: './pay-form.component.scss',
})
export class PayFormComponent {
  productsToPay: Observable<Product[]> | undefined;
  constructor(private cart: ProductService) {
    this.productsToPay = this.cart.cartList.asObservable();
  }
}
