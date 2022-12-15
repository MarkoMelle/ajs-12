import Buyable from './Buyable'
export default class Movie implements Buyable {
  constructor (
    readonly id: number,
    public price: number,
    readonly name: string,
    readonly year: number,
    readonly country: string,
    readonly slogan: string,
    readonly genre: string[],
    readonly duration,
    public amount: number = 1
  ) { }
}
