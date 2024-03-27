export type Fruit = {
    readonly id: number
    readonly name: string
    readonly price: number
}

export type FruitState = Fruit & { readonly quantity: number }