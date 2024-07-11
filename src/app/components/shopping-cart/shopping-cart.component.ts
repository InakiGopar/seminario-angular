import { Component } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { Product } from '../products-list/Product';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.scss',
})
export class ShoppingCartComponent {
  cartList$: Observable<Product[]> | undefined;
  total: number = 0;

  constructor(private cart: ProductService) {
    this.cartList$ = this.cart.cartList
      .asObservable()
      .pipe(tap((products: Product[]) => this.calculateTotal(products)));
  }
  /**
   * Este metodo calcula el valor total del carrito de compras iterando por cada
   * producto agregado al mismo, suma el precio multiplicado la cantidad
   */
  calculateTotal(products: Product[]): number {
    return (this.total = products.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    ));
  }
  removeOfCart(product: Product): void {
    this.cart.removeOfCart(product);
    // Recalcula el total después de eliminar un producto del carrito
    this.cartList$?.subscribe((products) => this.calculateTotal(products));
  }
}
