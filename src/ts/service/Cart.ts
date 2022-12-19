/* eslint-disable @typescript-eslint/no-non-null-assertion */
import Buyable from '../domain/Buyable'
import Gadgets from '../domain/Gadgets'

export default class Cart {
   private readonly _items: Buyable[] = []

  // Task 2 statr

  sum (): number {
    let sum = 0
    for (const item of this._items) {
      sum += item.price
    }
    return sum
  }

  sumDiscount (disc: number): number {
    let sum = 0
    for (const item of this._items) {
      sum += item.price
    }
    sum = sum - (sum * disc / 100)
    return sum
  }

  // Task 3 start

  add (item: Buyable): void {
    const search = this._items.find(i => i.id === item.id)
    if (item instanceof Gadgets && search != null) {
      const id: number = this._items.indexOf(search)
      this._items[id].price += item.price
      this._items[id].amount += 1
    } else {
      this._items.push(item)
    }
  }

  remove (item: Buyable): void {
    const search = this._items.find(i => i.id === item.id)
    if (search != null && search.amount > 1) {
      const id: number = this._items.indexOf(search)
      this._items[id].price = this._items[id].price - item.price
      this._items[id].amount -= 1
    }
  }

  get items (): Buyable[] {
    return [...this._items]
  }
}
