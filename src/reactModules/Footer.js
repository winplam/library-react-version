import React from 'react'
import { saveToStorage } from '../modules/Storage'

function Footer ({ myLibrary }) {
  // Remove all books from library
  const removeAllBooks = () => {
    if (window.confirm('Erase all books?')) {
      myLibrary.splice(0)
      saveToStorage(myLibrary)
      window.location.reload()
    }
  }

  const resetToSample = () => {
    if (window.confirm('Reset to sample data?')) {
      localStorage.clear()
      window.location.reload()
    }
  }

  return (
    <footer>This app was made for a <a
      href="https://www.theodinproject.com/courses/javascript/lessons/library">
      React JS coding assignment</a> at The Oden Project. View the <a
      href="https://github.com/winplam/library">source code</a> on GitHub.<br/>
      <button className={'footerButtons'} onClick={removeAllBooks}>
        Remove all books
      </button>
      including sample. |
      <button className={'footerButtons'} onClick={resetToSample}>
        Reset to sample</button>data.
    </footer>
  )
}

export default Footer