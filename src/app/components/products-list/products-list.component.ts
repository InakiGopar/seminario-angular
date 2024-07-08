import { Component } from '@angular/core';
import { Product } from './Product';
import { ProductCartService } from '../../service/product-cart.service';
import { ProductDataService } from '../../service/product-data.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss',
})
export class ProductsListComponent {
  products: Array<Product> = [];

  constructor(
    private cart: ProductCartService,
    private productDataServicie: ProductDataService
  ) {
    this.productDataServicie
      .getAll()
      .subscribe((products) => (this.products = products));
  }

  addToCart(product: Product): void {
    if (product.quantity > 0) {
      this.cart.addToCart(product);
      product.stock -= product.quantity;
      product.quantity = 0;
    }
  }
}
