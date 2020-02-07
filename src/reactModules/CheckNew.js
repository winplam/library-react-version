import React from 'react'

function CheckEdit (props) {
  // Toggle checkbox (circle) for adding new book
  const toggleCheckbox = (event) => {
    const checkBox = event.target
    if (checkBox.checked) {
      checkBox.value = false
      checkBox.removeAttribute('checked')
    } else {
      checkBox.value = true
      checkBox.setAttribute('checked', 'checked')
    }
  }

  return (
    <label className="col2 checkbox" id="m-read" data-check={'new'}>
      <input type="checkbox" id="m-checkbox"
             data-bookid={props.bookID}
             defaultChecked={false}
             onClick={toggleCheckbox}
      />
      <span className="checkmark" id="m-checkmark"></span>
    </label>
  )
}

export default CheckEdit
