import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CartService } from '../../shared/services/cart.service';

@Component({
  selector: 'app-cart',
  template: `
    <div *ngFor="let entry of cartService.cart$ | async | keyvalue">
      {{ entry.value.name }} - {{ entry.value.quantity }} 
      <button (click)="cartService.addFruit(entry.value)">+</button>
      <button (click)="cartService.removeFruit(entry.value)">-</button> 
      <button (click)="cartService.removeAllFruitOfType(entry.value)">x</button>
    </div>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartComponent {

  cartService = inject(CartService)

}