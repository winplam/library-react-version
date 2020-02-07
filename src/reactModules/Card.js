/* eslint-disable no-mixed-operators */
import React from 'react'
import Book from './Book'
import Phantom from './Phantom'
import GetNumPhantoms from '../modules/PhantomCount'

// Create multiple "<Book/>" components based on how many there are from data
function Card (props) {

  // Creating GUID/UUID in Javascript using ES6 Crypto API
  const CreateUUID = () => {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g,
      c => (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c /
        4).toString(16))
  }

  // Add hidden books to last row to "align" books to the left
  const addPhantomElements = () => {
    const phantoms = []
    for (let i = 0; i < GetNumPhantoms.numGhosts(props.myLibrary); i++) {
      phantoms.push(<Phantom key={CreateUUID()}/>)
    }
    return phantoms
  }

  const createBookshelf = (myLibrary, changeModal, toggleState) => {
    const bookShelf = []

    // Return formatted number of pages in book
    function pageCount (book) {
      let pages
      parseInt(book.pages, 10) > 1
        ? pages = parseInt(book.pages, 10) + ' pages'
        : pages = ' '
      return pages
    }

    // Return formatted year of publication for book
    function publicationYear (book) {
      let year
      (parseInt(book.pages, 10) > 1 &&
        parseInt(book.year, 10) >= 0) ? year = ', '
        + parseInt(book.year, 10) : year = parseInt(book.year, 10)
      return year
    }

    // Create Book component
    myLibrary.map(myLibraryMap)

    function myLibraryMap (book, bookID, myLibrary) {
      bookShelf.push(<Book myLibrary={myLibrary}
                           bookID={bookID}
                           title={book.title}
                           author={book.author}
                           pages={pageCount(book)}
                           year={publicationYear(book)}
                           read={book.read}
                           desc={book.desc}
                           cover={book.cover}
                           changeModal={changeModal}
                           toggleState={toggleState}
                           key={CreateUUID()}/>)
    }

    return bookShelf
  }

  return (
    <div className="card-catalogue">
      {createBookshelf(props.myLibrary, props.changeModal,
        props.toggleState)}
      {addPhantomElements()}
    </div>
  )
}

export default Card