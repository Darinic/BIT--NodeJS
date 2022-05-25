import fs from "fs/promises";
import { readFile } from "fs";

// import Cat from './classes/Cat.js'

// const gyvunelis= new Cat()

// gyvunelis.sleep(3)

// console.table(gyvunelis)

// console.log('Nuovargis:', gyvunelis.sleep(2))
// console.log('Alkis', gyvunelis.feed(7))

// gyvunelis.status()

import BookList from "./classes/BookList.js";

const bookList= new BookList(2)

// //perskaiciau
console.log(bookList.markRead())
// console.log(bookList)


if(bookList.checkRead(bookList.list[0].id)) {
    console.log('knyga yra perskaityta')
}else {
    console.log('knyga yra neperskaityta')
}
bookList.fillGaps(5)

console.log(bookList.list)
console.log(BookList.bookCount())
// bookList.markRead()
// bookList.markRead()
// bookList.markRead()
// // bookList.markRead()
// bookList.filterPages()
// bookList.deleteBook()
// bookList.deleteBook()
// // bookList.list[0].read()

// // bookList.list.forEach(book => {
// //     console.table(book.perskaityta)
// // })
// console.log(bookList)

// const map = new Map()

// map.set('indeksas', 10)

// console.log(map)
// console.log(map.get('indeksas'))
// console.log(map.size)

// console.log(map.delete('indeksas'))