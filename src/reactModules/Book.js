import React from 'react'
import Edit from './Edit'
import Delete from './Delete'
import CheckBook from './CheckBook'

// Display books to the page
function Book (props) {
  return (
    <article className="card">
      <div className="book-cover"
           style={{ backgroundImage: `url(${props.cover})` }}></div>
      <div className="overlay">
        <h2 className="title">{props.title}</h2>
        <h3 className="author">{props.author}</h3>
        <p className="description">{props.desc}</p>
        <p className="book-stats">{props.pages}{props.year}</p>
        <div className="buttons">
          <Edit bookID={props.bookID} changeModal={props.changeModal}/>
          <Delete bookID={props.bookID} myLibrary={props.myLibrary}
                  toggleState={props.toggleState}/>
          <CheckBook bookID={props.bookID} myLibrary={props.myLibrary}/>
        </div>
      </div>
    </article>
  )
}

export default Book
