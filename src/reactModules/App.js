import React from 'react'
import Header from './Header'
import Card from './Card'
import Modal from './Modal'
import Footer from './Footer'
import '../style.css'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = { modalType: 'editBook' }
    this.state = { currentBook: 'editBook' }
    this.state = { someState: false }
  }

  // State and methods for showing and hiding the New Book modal
  changeModal = (modalType, currentBook) => {
    this.setState({ modalType: modalType })
    this.setState({ currentBook: currentBook })
  }

  // Create modal when "shown" and empty out (remove) by default
  createModal = (myLibrary) => {
    const modalType = this.state.modalType
    let modal = ''
    // Create Modal component
    if (modalType === 'editBook' || modalType === 'newBook') {
      modal = (<Modal bookID={this.state.currentBook}
                      handleKeydown={this.handleKeydown}
                      handleOutsideClick={this.handleOutsideClick}
                      myLibrary={myLibrary}
                      modalType={modalType}
                      changeModal={this.changeModal}/>)
    }
    return modal
  }

  // Close (remove) modal when Escape key is pressed
  handleKeydown = (event) => {
    if (event.key === 'Escape') this.changeModal('')
  }

  // Close (remove) modal when clicked outside of it
  handleOutsideClick = (event) => {
    if (this.node.childNodes[2] === event.target) {
      this.changeModal('')
    }
  }

  // Refresh state when window re-sizes to update number of phantom elements
  handleResize = () => {
    this.toggleState()
  }

  // Call handleResize to refresh state when window re-sizes to update number of phantom elements
  componentDidMount () {
    window.addEventListener('resize', this.handleResize)
  }

  // Toggle someState between true/false to force re-render of books (Used by Delete button)
  toggleState = () => {
    const toggle = this.state.someState ? false : true
    this.setState({ someState: toggle })
  }

  render () {
    return (
      <div ref={node => this.node = node}>
        <Header changeModal={this.changeModal}
                newBook={this.props.myLibrary.length}/>
        <Card myLibrary={this.props.myLibrary}
              changeModal={this.changeModal}
              toggleState={this.toggleState}/>
        {this.createModal(this.props.myLibrary)}
        <Footer myLibrary={this.props.myLibrary}/>
      </div>
    )
  }
}

export default App
