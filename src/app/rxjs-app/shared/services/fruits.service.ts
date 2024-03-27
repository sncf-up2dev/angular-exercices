import { Injectable } from '@angular/core';
import { Fruit } from '../model/fruit';

@Injectable({
  providedIn: 'root'
})
export class FruitService {

  get fruitList() {
    return this._list
  }

  /* Remplacer cette liste par un appel http */
  private readonly _list: Fruit[] = [
    { id: 1, name: "Pomme", price: 1 },
    { id: 2, name: "Orange", price: 3 },
  ]

}
