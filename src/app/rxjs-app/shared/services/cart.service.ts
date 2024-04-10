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
  private _cart: BehaviorSubject<ReadonlyMap<number, FruitState>>
  cart$: Observable<FruitState[]>

  /* Pour ceux qui veulent aller plus loin :
  - Implémenter un observable total$, qui renvoie le prix total du panier 
  */
  total$!: Observable<number>

  addFruit(fruit: Fruit) {
    const cartStateCopy = new Map(this._cart.getValue())

    const fruitState = cartStateCopy.get(fruit.id)

    if (fruitState === undefined) {
      // Le fruit n'est pas déja dans le panier
      cartStateCopy.set(fruit.id, { ...fruit, quantity: 1 })
    } else {
      // Le fruit est déja dans le panier
      cartStateCopy.set(fruitState.id, { ...fruitState, quantity: fruitState.quantity + 1 })
    }

    this._cart.next(cartStateCopy)
  }

  /* /!\ Pour les méthodes addFruit(), removeFruit() et removeAllFruitOfType(), attention à ne pas muter la Map existante */

  removeFruit(fruit: Fruit) {
    /* Enlève un fruit dans le panier
    /* Deux cas à considerer :
        - Il reste un fruit de ce type dans le panier, enlever l'entrée dans la map
        - Il reste plusieurs fruits de ce type dans le panier, dans ce cas enlever tous les types de fruits 
    */
    const cartStateCopy = new Map(this._cart.getValue())
    const fruitState = cartStateCopy.get(fruit.id)

    if (fruitState === undefined)
      return

    if (fruitState.quantity > 1)
      cartStateCopy.set(fruitState.id, { ...fruitState, quantity: fruitState.quantity - 1 })
    else
      cartStateCopy.delete(fruitState.id)

    this._cart.next(cartStateCopy)

  }

  removeAllFruitOfType(fruit: Fruit) {
    /* Enlève tous les fruits d'un type dans le panier */
    const cartStateCopy = new Map(this._cart.getValue())
    const fruitState = cartStateCopy.get(fruit.id)

    if (fruitState === undefined)
      return

    cartStateCopy.delete(fruitState.id)

    this._cart.next(cartStateCopy)
  }

  /* Ici le constructeur nous donne une valeur par défaut pour le panier, mais il n'est pas indispensable */
  constructor() {
    const defaultMap = new Map<number, FruitState>()
    defaultMap.set(1, { id: 1, name: "Pomme", price: 1, quantity: 5 })
    defaultMap.set(2, { id: 2, name: "Orange", price: 3, quantity: 10 })

    const readonlyMap: ReadonlyMap<number, FruitState> = defaultMap

    this._cart = new BehaviorSubject(readonlyMap)
    this.cart$ = this._cart.asObservable().pipe(
      map(cartMap => [...cartMap.values()])
    )

    this.total$ = this._cart.pipe(
      map(
        cartMap => Array.from(cartMap.values()).reduce((acc, val) => val.price * val.quantity + acc, 0)
      )
    )
  }

}
