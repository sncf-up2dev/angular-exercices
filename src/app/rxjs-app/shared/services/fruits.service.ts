import { Injectable, inject } from '@angular/core';
import { Fruit } from '../model/fruit';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FruitService {

  get fruitList() {
    return this._list
  }

  /* Remplacer cette liste par un appel http */
  // private readonly _list: Fruit[] = [
  //   { id: 1, name: "Pomme", price: 1 },
  //   { id: 2, name: "Orange", price: 3 },
  // ]
  
  readonly FRUIT_DB = "http://localhost:3000/fruits"

  _http = inject(HttpClient);

  private readonly _list = this._http.get<Fruit[]>(this.FRUIT_DB)
  
}
