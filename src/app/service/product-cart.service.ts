import { Injectable } from '@angular/core';
import { Product } from '../components/products-list/Product';
import { BehaviorSubject } from 'rxjs';

/**
 * Maneja la logica del carrito
 */
@Injectable({
  providedIn: 'root',
})
export class ProductCartService {
  private _cartList: Product[] = []; //variable que queremos observar
  cartList: BehaviorSubject<Product[]> = new BehaviorSubject(this._cartList);

  constructor() {}

  addToCart(product: Product): void {
    let item: Product | undefined = this._cartList.find(
      (p1) => p1.name == product.name
    );
    if (!item) {
      this._cartList.push({ ...product });
    } else {
      item.quantity += product.quantity;
    }
    //le estoy diciendo al behaviorSubject que notifique que hubo un cambio en mi varaible privada
    this.cartList.next(this._cartList);
  }
}
