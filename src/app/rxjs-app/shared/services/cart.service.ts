import { Injectable } from '@angular/core';
import { Fruit, FruitState } from '../model/fruit';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  /* Le type du panier peut faire peur, nous allons le décomposer 
    - L'état du panier est stocké sous la forme d'une Map<K, V>
      - K est la clé de notre map, ici un nombre, qui va correspondre à l'id d'un fruit
      - V est un objet de type FruitState, qui est le type Fruit avec une quantité associée

    - Par exemple, pour représenter 10 oranges dans notre panier : 
      cart.set(2, { id: 2, name: "Orange", price: 3, quantity: 10 })
        - La clé est 2, id de notre fruit
        - { id: 2,
            name: "Orange",
            price: 3,
            quantity: 10
        } est un objet de type FruitState, qui représente le détail de notre fruit
  */
  private _cart: BehaviorSubject<Map<number, FruitState>>
  cart$: Observable<Map<number, FruitState>>

  /* Pour ceux qui veulent aller plus loin :
  - Implémenter un observable total$, qui renvoie le prix total du panier 
  */
  total$!: Observable<number>

  addFruit(fruit: Fruit) {
    /* Ajoute un fruit dans le panier
    /* Deux cas à considerer :
        - Le fruit n'est pas déja dans le panier
        - Le fruit est déja dans le panier
    */
  }

  /* /!\ Pour les méthodes addFruit(), removeFruit() et removeAllFruitOfType(), attention à ne pas muter la Map existante */

  removeFruit(fruit: Fruit) {
    /* Enlève un fruit dans le panier
    /* Deux cas à considerer :
        - Il reste un fruit de ce type dans le panier, enlever l'entrée dans la map
        - Il reste plusieurs fruits de ce type dans le panier, dans ce cas enlever tous les types de fruits 
    */
  }

  removeAllFruitOfType(fruit: Fruit) {
    /* Enlève tous les fruits d'un type dans le panier */
  }

  /* Ici le constructeur nous donne une valeur par défaut pour le panier, mais il n'est pas indispensable */
  constructor() {
    const defaultMap = new Map<number, FruitState>()
    defaultMap.set(1, { id: 1, name: "Pomme", price: 1, quantity: 5 })
    defaultMap.set(2, { id: 2, name: "Orange", price: 3, quantity: 10 })

    this._cart = new BehaviorSubject(defaultMap)
    this.cart$ = this._cart.asObservable()
  }

}
