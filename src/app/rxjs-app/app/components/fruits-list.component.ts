import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FruitService } from '../../shared/services/fruits.service';
import { CartService } from '../../shared/services/cart.service';

@Component({
  selector: 'app-fruits-list',
  template: `
    <div *ngFor="let fruit of fruitList$ | async">
      {{fruit.name}} - {{fruit.price}}€ 
      <button (click)="cartService.addFruit(fruit)">Ajouter</button>
    </div>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FruitsListComponent {

  fruitsService = inject(FruitService)
  cartService = inject(CartService)

  fruitList$ = this.fruitsService.getFruitList()
}
