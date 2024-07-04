import { Component } from '@angular/core';
import { Product } from './Product';
import { ProductCartService } from '../../service/product-cart.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss',
})
export class ProductsListComponent {
  products: Array<Product> = [
    {
      image: 'assets/img/browine.png',
      name: 'Browine',
      price: 4500,
      description: '...',
      stock: 5,
      specialPrice: false,
      quantity: 0,
    },
    {
      image: 'assets/img/rogel.png',
      name: 'Rogel',
      price: 5500,
      description: '...',
      stock: 2,
      specialPrice: false,
      quantity: 0,
    },
    {
      image: 'assets/img/lemon-pie.png',
      name: 'Lemon Pie',
      price: 3500,
      description: '...',
      stock: 1,
      specialPrice: true,
      quantity: 0,
    },
    {
      image: 'assets/img/alfajorcito.png',
      name: 'Alfajorcitos',
      price: 800,
      description: '...',
      stock: 17,
      specialPrice: false,
      quantity: 0,
    },
    {
      image: 'assets/img/chocotorta.png',
      name: 'Chocotorta',
      price: 3500,
      description: '...',
      stock: 0,
      specialPrice: false,
      quantity: 0,
    },
  ];

  constructor(private cart: ProductCartService) {}

  addToCart(product: Product): void {
    this.cart.addToCart(product);
    product.stock -= product.quantity;
    product.quantity = 0;
  }
}
