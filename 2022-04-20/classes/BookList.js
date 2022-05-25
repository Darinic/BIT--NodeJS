import Book from "./Book.js";

class BookList {
  static count = 0;
  constructor(size) {
    this.list = [];
    this.current = 0;
    this.populate(size);
    BookList.count += size;
  }
  populate(length = 10) {
    //sugeneruojama sarasas pasinaudojant book klase
    this.list = [...Array(length).keys()].map(() => new Book());
  }
  fillGaps(ceil = 10) {
      if(BookList.count < ceil) {
          let count = BookList.count
          let gap = Array(ceil-count).fill(new Book())

          this.list = this.list.concat(gap)
          BookList.count = ceil

          console.log(this.list.length)
      }
  }
  markRead() {
    this.current += 1;
    if (this.list.length + 1 > this.current) {
      let book = this.list[this.current - 1];
      book.read();
      return `Sekanti skaitoma knyga yra ${book.pavadinimas}`;
    } else {
      return "Visos knygos perskaitytos";
    }
  }
  checkRead(id) {
    let book = this.list[this.current];
    if (id) {
      let index = this.list.findIndex((el) => el.id == id);
      book = this.list[index];
    }
    return Book.perskaitytos_knygos.get(book.id) == undefined ? false : true;
  }

  filterPages() {
    return this.list.sort((a, b) => a.puslapiai - b.puslapiai);
  }

  deleteBook() {
    const list = this.filterPages();

    list.splice(list.length - 1, 1);

    BookList.count--;
    return "Įrašas sekmingai ištrintas";
  }
  static bookCount() {
    return BookList.count;
  }
}
export default BookList;
