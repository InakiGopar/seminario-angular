import { Injectable } from '@angular/core';
import { Product } from '../components/products-list/Product';
import { BehaviorSubject } from 'rxjs';
import { ProductDataService } from './product-data.service';

/**
 * Maneja la logica del carrito
 */
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  //contienen la lista de productos en el carrito y la lista de todos los productos
  private _cartList: Product[] = [];
  private _productList: Product[] = [];

  //observables los "sujetos" vamos a observar
  cartList: BehaviorSubject<Product[]> = new BehaviorSubject(this._cartList);
  productList: BehaviorSubject<Product[]> = new BehaviorSubject(
    this._productList
  );

  /**
   * Inyeccion de dependencia el constructor recibe una
   * instancia de ProductDataService el cual se encarga de traer
   * los datos de los productos.
   * luego se asignan a esos datos al _productList y notificamos el cambio
   * con next() a todos los suscriptores
   *
   */
  constructor(private data: ProductDataService) {
    this.data.getAll().subscribe({
      next: (datos) => {
        this._productList = datos;
      },
    });
    this.productList.next(this._productList);
  }

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
