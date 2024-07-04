import { Component } from '@angular/core';
import { ProductCartService } from '../../service/product-cart.service';
import { Product } from '../products-list/Product';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.scss',
})
export class ShoppingCartComponent {
  cartList$: Observable<Product[]> | undefined;
  constructor(private cart: ProductCartService) {
    this.cartList$ = cart.cartList.asObservable();
  }
}
