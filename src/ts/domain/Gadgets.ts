export default class Gadgets {
  constructor (
    readonly id: number,
    readonly name: string,
    readonly author: string,
    public price: number,
    public amount: number = 1
  ) { }
}
