export type Fruit = {
    id: number
    name: string
    price: number
}

export type FruitState = Fruit & { quantity: number }
