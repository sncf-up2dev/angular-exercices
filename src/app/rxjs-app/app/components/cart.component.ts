import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CartService } from '../../shared/services/cart.service';

@Component({
  selector: 'app-cart',
  template: `
    <div *ngFor="let entry of cartService.cart$ | async">
      {{ entry.name }} - {{ entry.quantity }} 
      <button (click)="cartService.addFruit(entry)">+</button>
      <button (click)="cartService.removeFruit(entry)">-</button> 
      <button (click)="cartService.removeAllFruitOfType(entry)">x</button>
    </div>
    Total du panier : {{ cartService.total$ | async }}
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartComponent {

  cartService = inject(CartService)

}