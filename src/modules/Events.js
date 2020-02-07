// Handle edit, delete and checkbox click events
const clickEventHandler = () => {
  // Add event listeners
  window.addEventListener('click', function (e) {
    if (e.target === modal && modal.classList.contains('modalType-modal')) {
      CloseModal.close()
    }
  })
  window.addEventListener('keydown', function (e) {
    if (modal.classList.contains('modalType-modal')) {
      switch (e.key) {
        case 'Escape':
        case 'Clear':
          CloseModal.close()
          break
      }
    }
  })

  class SubmitModal {
    static keyDownEventHandler (keydownEvent) {
      switch (keydownEvent.key) {
        case 'Escape':
        case 'Clear':
          CloseModal.close()
          break
        case 'Enter':
          SubmitBook.submit()
          break
        default:
          break
      }
    }
  }
}