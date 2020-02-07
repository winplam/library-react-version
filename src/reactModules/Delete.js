import React from 'react'
import { saveToStorage } from '../modules/Storage'

// Delete book from main view and myLibrary
function Delete (props) {
  function deleteBook (bookID, myLibrary, toggleState) {
    // if (window.confirm(`Delete book "${myLibrary[bookID].title}"?`))
    myLibrary.splice(bookID, 1)
    toggleState()

    saveToStorage(props.myLibrary)
    window.location.reload()
  }

  return (
    <button className="btn"
            data-bookid={props.bookID}
            onClick={() => deleteBook(
              props.bookID,
              props.myLibrary,
              props.toggleState,
            )}>Delete</button>
  )
}

export default Delete
