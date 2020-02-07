import React from 'react'

function Header (props) {
  return (
    <div className="header">
      <div className="header-title">My Library</div>
      <button id="add-btn"
              onClick={() => {props.changeModal('newBook', props.newBook)}}>
        New Book
      </button>
    </div>
  )
}

export default Header