import samples from '../samples'
import { bookClass } from './BookClass'

// ---------- Methods for handling data manipulation, add, edit, delete and read buttons

// Add book to library array
function addBookToLibrary (book, myLibrary) {
  myLibrary.push(book)
  saveToStorage(myLibrary)
}

// Load books from localStorage or add sample books to the library
const loadData = () => {
  if (localStorage.getItem('my-local-library')) {
    console.log('Loading library from localStorage')
    return JSON.parse(localStorage.getItem('my-local-library'))
  } else {
    console.log('Loading sample books')
    let sampleBooks = []
    samples.map(samplesMap)

    function samplesMap (jsonEntry) {
      sampleBooks.push(new bookClass(jsonEntry.title, jsonEntry.author,
        jsonEntry.pages, jsonEntry.year, jsonEntry.read,
        jsonEntry.desc, jsonEntry.cover))
    }

    return sampleBooks
  }
}

// Save myLibrary from memory to localStorage
function saveToStorage (myLibrary) {
  localStorage.setItem('my-local-library', JSON.stringify(myLibrary))
  console.log('Data saved to storage ->')
  console.log(myLibrary)
}

export {
  addBookToLibrary,
  loadData,
  saveToStorage,
}
