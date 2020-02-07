import React from 'react'

// Edit book from library when "Edit" button is clicked
function Edit (props) {
  return (
    <button className="btn"
            data-bookid={props.bookID}
            onClick={() => {props.changeModal('editBook', props.bookID)}}
            id={`edit-btn-${props.bookID}`}
    >Edit
    </button>
  )
}

export default Edit