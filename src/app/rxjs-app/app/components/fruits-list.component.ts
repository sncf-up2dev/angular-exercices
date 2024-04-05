import {ChangeDetectionStrategy, Component, inject, OnInit} from '@angular/core';
import {FruitService} from '../../shared/services/fruits.service';
import {CartService} from '../../shared/services/cart.service';
import {Fruit} from "../../shared/model/fruit";
import {Observable} from "rxjs";

@Component({
  selector: 'app-fruits-list',
  template: `
    <div *ngFor="let fruit of this.fruitsList$ | async">
      {{ fruit.name }} - {{ fruit.price }}€
      <button (click)="cartService.addFruit(fruit)">Ajouter</button>
    </div>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FruitsListComponent implements OnInit {

  fruitsService = inject(FruitService)
  cartService = inject(CartService)
  fruitsList$?: Observable<Fruit[]>;

  ngOnInit() {
    this.fruitsList$ = this.fruitsService.fruitList

  }

}
