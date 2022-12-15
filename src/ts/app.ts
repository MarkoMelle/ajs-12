import Cart from './service/Cart'
import Book from './domain/Book'
import MusicAlbum from './domain/MusicAlbum'
import Gadgets from './domain/Gadgets'
import Movie from './domain/Movie(task1)'

const cart = new Cart()
cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225))
cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900))
cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900))
cart.add((new Movie(1002,500,'Мстители', 2012, 'США', 'Avengers Assemble!', ['фантастика', 'боевик'], 137)))
cart.add(new Gadgets(1007, 'Iphone', 'Apple', 200))
console.log(cart.items)
cart.add(new Gadgets(1007, 'Iphone', 'Apple', 200))
cart.add(new Gadgets(1007, 'Iphone', 'Apple', 200))
cart.remove(new Gadgets(1007, 'Iphone', 'Apple', 200))
console.log(cart.items)
