import React from 'react'

function CheckEdit (props) {
  const read = props.myLibrary[props.bookID].read
  // Toggle checkbox (circle) for edit current book modal
  const toggleCheckbox = (event) => {
    const checkBox = event.target
    // Update modal checkbox with correct read status
    checkBox.checked ? checkBox.checked = true : checkBox.checked = false
  }

  return (
    <label className="col2 checkbox" id="m-read" data-check={'edit'}>
      <input type="checkbox" id="m-checkbox"
             data-bookid={props.bookID}
             defaultChecked={read}
             onClick={toggleCheckbox}
      />
      <span className="checkmark" id="m-checkmark"></span>
    </label>
  )
}

export default CheckEdit
