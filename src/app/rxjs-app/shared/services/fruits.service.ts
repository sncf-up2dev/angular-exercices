import {inject, Injectable} from '@angular/core';
import { Fruit } from '../model/fruit';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FruitService {

  readonly FRUITS_URL = "http://localhost:3000/fruits"
  _http = inject(HttpClient);

  get fruitList() {
    return this._list
  }

  /* Remplacer cette liste par un appel http */
  private readonly _list = this._http.get<Fruit[]>(this.FRUITS_URL);

}
