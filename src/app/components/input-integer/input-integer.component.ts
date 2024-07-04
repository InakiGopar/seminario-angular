import { Component, Input, Output, EventEmitter } from '@angular/core';
import { stringify } from 'querystring';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrl: './input-integer.component.scss',
})
export class InputIntegerComponent {
  //atributos
  @Input()
  quantity: number = 0;

  @Input()
  max: number = 0;

  @Input()
  condition: boolean = false;

  @Output()
  quantityChange: EventEmitter<number> = new EventEmitter<number>();

  downQuantity(): void {
    if (this.quantity > 0) {
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }
  }

  OnChangeQuantity(event: Event): void {
    if (event.target instanceof HTMLInputElement) {
      let num = parseInt(event.target.value);
      if (num < 0 || num > this.max) {
        event.target.value = '0';
        event.preventDefault();
      }
    } else {
      this.quantityChange.emit(this.quantity);
    }
  }

  upQuantity(): void {
    if (this.quantity < this.max) {
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    }
  }
}
