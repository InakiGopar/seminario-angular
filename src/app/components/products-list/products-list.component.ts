import { Component } from '@angular/core';
import { Product } from './Product';
import { ProductService } from '../../service/product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss',
})
export class ProductsListComponent {
  products: Observable<Product[]> = new Observable();

  constructor(private cart: ProductService) {
    this.products = this.cart.productList.asObservable();
  }

  addToCart(product: Product): void {
    if (product.quantity > 0) {
      this.cart.addToCart(product);
      product.stock -= product.quantity;
      product.quantity = 0;
    }
  }
}
