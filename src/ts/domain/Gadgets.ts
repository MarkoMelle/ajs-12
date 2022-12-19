import Buyable from './Buyable'

export default class Gadgets implements Buyable {
  constructor (
    readonly id: number,
    readonly name: string,
    readonly author: string,
    public price: number,
    public amount: number = 1
  ) { }
}
