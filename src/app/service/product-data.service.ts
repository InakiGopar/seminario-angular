import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Product } from '../components/products-list/Product';

const URL = 'https://668837d40bc7155dc01acf36.mockapi.io/ysyProbamos/products';

@Injectable({
  providedIn: 'root',
})
export class ProductDataService {
  constructor(private http: HttpClient) {}

  /**
   * Este metodo consume la API de Ysyprobamos la cual trae todos los productos
   * de la pasteleria retornando un observable de tipo Arreglo de Productos.
   */
  getAll(): Observable<Product[]> {
    return this.http
      .get<Product[]>(URL)
      .pipe(
        tap((products: Product[]) =>
          products.forEach((product) => (product.quantity = 0))
        )
      );
  }
}
