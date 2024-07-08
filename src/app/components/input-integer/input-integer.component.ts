import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrl: './input-integer.component.scss',
})
export class InputIntegerComponent {
  @Input()
  quantity: number = 0;

  @Input()
  max: number = 0;

  @Input()
  condition: boolean = false;

  @Output()
  quantityChange: EventEmitter<number> = new EventEmitter<number>();

  onFocus(event: Event): void {
    if (event.target instanceof HTMLInputElement) {
      event.target.value = '';
    }
  }

  downQuantity(): void {
    if (this.quantity > 0) {
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }
  }

  OnChangeQuantity(event: Event): void {
    const input = event.target as HTMLInputElement;
    let value = input.value;

    // Evitar que haya numeros que arranquen en 0 -> 01,02 etc
    value = value.replace(/^0+(?!$)/, '');

    let num = Number(value);
    if (isNaN(num) || num < 0) {
      num = 0;
    } else if (num > this.max) {
      num = this.max;
    }

    this.quantity = num;
    this.quantityChange.emit(this.quantity);
  }

  upQuantity(): void {
    if (this.quantity < this.max) {
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    }
  }
}
