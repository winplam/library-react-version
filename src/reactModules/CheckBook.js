import React from 'react'
import { saveToStorage } from '../modules/Storage'

function CheckBook (props) {
  const bookID = props.bookID
  const myLibrary = props.myLibrary
  const read = myLibrary[bookID].read

  // Toggle checkbox (circle) for book displayed
  const toggleCheckbox = () => {
    if (myLibrary[bookID].read) {
      myLibrary[bookID].read = false
    } else {
      myLibrary[bookID].read = true
    }
    saveToStorage(myLibrary)
  }

  return (
    <label className="checkbox" data-check={'book'}>
      <input type="checkbox"
             defaultChecked={read}
             onClick={toggleCheckbox}
      />
      <span className="checkmark"></span>
    </label>
  )
}

export default CheckBook
