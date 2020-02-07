import React from 'react'
import Cancel from './Cancel'
import CheckEdit from './CheckEdit'
import CheckNew from './CheckNew'
import Submit from './Submit'

class Modal extends React.Component {
  // Fill modal input fields with book data when editing current book
  fillModal = (bookID, myLibrary) => {
    const book = myLibrary[bookID]
    document.querySelector('.modal-content').dataset.bookid = bookID
    document.getElementById('m-checkbox').dataset.bookid = bookID
    document.getElementById('m-title').value = book.title
    document.getElementById('m-author').value = book.author
    document.getElementById('m-description').value = book.desc
    document.getElementById('m-pages').value = book.pages
    document.getElementById('m-year').value = book.year
    document.getElementById('m-image-url').value = book.cover
  }

  chooseCheckbox = () => {
    const modalType = this.props.modalType
    if (modalType === 'editBook') {
      return (<CheckEdit bookID={this.props.bookID}
                         myLibrary={this.props.myLibrary}/>)
    } else if (modalType === 'newBook') {
      return (<CheckNew myLibrary={this.props.myLibrary}/>)
    }
  }

  componentDidMount = () => {
    if (this.props.modalType === 'editBook')
      this.fillModal(this.props.bookID, this.props.myLibrary)
    // Needed to remove modal when clicked outside of it
    document.addEventListener('click', this.props.handleOutsideClick, false)
    document.addEventListener('keydown', this.props.handleKeydown, false)
  }

  componentWillUnmount () {
    document.removeEventListener('click', this.props.handleOutsideClick, false)
    document.removeEventListener('keydown', this.props.handleKeydown, false)
  }

  render () {
    return (
      <div className="modal show-modal">
        <form>
          <div className="modal-content">
            <div className="col1">Title:</div>
            <div className="col2">
              <input type="text" id="m-title" placeholder="Title [Required]"
                     required/>
            </div>
            <div className="col1">Author:</div>
            <div className="col2">
              <input type="text" id="m-author" placeholder="Author"/></div>
            <div className="col1">Description:</div>
            <div className="col2">
                <textarea id="m-description"
                          placeholder="Description"></textarea>
            </div>
            <div className="col1">Pages:</div>
            <div className="col2">
              <input type="number" id="m-pages" placeholder="Pages" min="0"/>
            </div>
            <div className="col1">Year:</div>
            <div className="col2">
              <input type="number" id="m-year" placeholder="Year" min="0"/>
            </div>
            <div className="col1">Read:</div>
            {this.chooseCheckbox()}
            <div className="col1">Image URL:</div>
            <div className="col2">
              <input type="text" id="m-image-url" placeholder="http://"/>
            </div>
            <div className="modal-buttons">
              <Submit changeModal={this.props.changeModal}
                      myLibrary={this.props.myLibrary}/>
              <Cancel changeModal={this.props.changeModal}/>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default Modal
