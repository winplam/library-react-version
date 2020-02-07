import React from 'react'
import { addBookToLibrary, saveToStorage } from '../modules/Storage'
import { bookClass } from '../modules/BookClass'

function Submit (props) {
  const bookInput = {
    title: '',
    author: '',
    pages: -1,
    year: -1,
    read: false,
    desc: '',
    cover: '',
  }

  // Remove values form modal making it all empty
  function clearModal () {
    let inputIDs = [
      'm-title',
      'm-author',
      'm-description',
      'm-pages',
      'm-year',
      'm-image-url']
    for (const input of inputIDs) {
      document.getElementById(input).value = ''
    }
    const modalContent = document.querySelector('.modal-content')
    const modalCheckbox = document.querySelector('#m-checkbox')
    modalContent.id = ''
    modalCheckbox.checked = false
    modalCheckbox.value = false
    modalCheckbox.removeAttribute('checked')
  }

  // Extract modal input and save to local storage
  function submitBook (event) {
    let bookID = document.getElementsByClassName(
      'modal-content')[0].dataset.bookid
    bookInput.title = document.getElementById('m-title').value
    if (bookInput.title === '') {
      console.log('Please enter a book title.')
    } else {
      bookInput.author = document.getElementById('m-author').value
      bookInput.pages = document.getElementById('m-pages').value
      bookInput.year = document.getElementById('m-year').value
      bookInput.read = document.getElementById('m-checkbox').checked
      bookInput.desc = document.getElementById('m-description').value
      bookInput.cover = document.getElementById('m-image-url').value
      // Add new book to end of library or edit current book if bookID exist
      if (bookID === undefined || bookID === 'undefined') {
        addBookToLibrary(new bookClass(bookInput.title, bookInput.author,
          bookInput.pages, bookInput.year, bookInput.read, bookInput.desc,
          bookInput.cover), props.myLibrary)
      } else {
        props.myLibrary[bookID] = new bookClass(bookInput.title,
          bookInput.author,
          bookInput.pages, bookInput.year, bookInput.read, bookInput.desc,
          bookInput.cover)
        bookID = undefined
      }
      saveToStorage(props.myLibrary)
      clearModal()
      // Remove modal by passing nothing to changeModal method
      props.changeModal()
      window.location.reload()
    }
  }

  return (
    <input type="submit" className="btn" id="m-submit" onClick={submitBook}/>)
}

export default Submit
