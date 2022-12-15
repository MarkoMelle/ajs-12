import Cart from '../service/Cart'
import Book from '../domain/Book'
import MusicAlbum from '../domain/MusicAlbum'
import Gadgets from '../domain/Gadgets'
import Movie from '../domain/Movie(task1)'

test('Cart should add Movie', () => {
  const cart = new Cart()
  cart.add(new Movie(1001, 500, 'Мстители', 2012, 'США', 'Avengers Assemble!', ['фантастика', 'боевик'], 137))
  cart.add(new Movie(1001, 500, 'Мстители 2', 2014, 'США', 'Avengers Assemble!', ['фантастика', 'боевик'], 132))
  const expected = [
    new Movie(1001, 500, 'Мстители', 2012, 'США', 'Avengers Assemble!', ['фантастика', 'боевик'], 137),
    new Movie(1001, 500, 'Мстители 2', 2014, 'США', 'Avengers Assemble!', ['фантастика', 'боевик'], 132)
  ]
  expect(cart.items).toEqual(expected)
})

test('should count sum with a discount and without', () => {
  const cart = new Cart()
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225))
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900))

  expect(cart.items).toEqual([new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225), new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900)])
  expect(cart.sum()).toBe(2900)
  expect(cart.sumDiscount(15)).toBe(2465)
})

test('should add and summarize gadgets price', () => {
  const cart = new Cart()
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225))
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900))
  cart.add(new Gadgets(1007, 'Iphone', 'Apple', 200))
  expect(cart.items).toEqual([
    new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225),
    new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900),
    new Gadgets(1007, 'Iphone', 'Apple', 200)
  ])
  cart.add(new Gadgets(1007, 'Iphone', 'Apple', 200))
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900))
  expect(cart.items).toEqual([
    new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225),
    new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900),
    new Gadgets(1007, 'Iphone', 'Apple', 400, 2),
    new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900)
  ])
  cart.remove(new Gadgets(1007, 'Iphone', 'Apple', 200))
  cart.remove(new Gadgets(1007, 'Iphone', 'Apple', 200))
  expect(cart.items).toEqual([
    new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225),
    new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900),
    new Gadgets(1007, 'Iphone', 'Apple', 200),
    new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900)
  ])
})
