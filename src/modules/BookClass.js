// Object constructor and function declarations for book prototype
class bookClass {
  constructor (title, author, pages, year, read, desc, cover) {
    this.title = title
    this.author = author
    this.pages = pages
    this.year = year
    this.read = read // Bool. Has book been finished
    this.desc = desc
    this.cover = cover // URL to cover image
  }
}

export { bookClass }