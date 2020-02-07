import React from 'react'

function Cancel ({ changeModal }) {
  return (
    <input type="button" className="btn" id="m-cancel" value="Cancel"
           onClick={changeModal}/>
  )
}

export default Cancel
