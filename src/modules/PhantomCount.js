class GetNumPhantoms {
  /**
   * @param {Integer} numElements The number of elements you're displaying.
   * @param {Number} element Width Width, in pixels, of each element.
   * @param {Number} margin Width, in pixels. Your minimum target margin between items. 2x the margin on each individual item.
   * @param {Number} containerWidth Width, in pixels, of the containing element.
   */
  static numGhosts (myLibrary) {
    let containerWidth = 0
    const getNumPhantomElements = ({ numElements, elementWidth, margin, containerWidth }) => {
      const elementsPerRow = Math.floor(
        containerWidth / (elementWidth + margin))
      const elementsInLastRow = numElements % elementsPerRow
      const numPhantomElements = elementsPerRow - elementsInLastRow
      return numPhantomElements
    }
    // Get root width for containerWidth before .card-catalogue is shown
    try {
      containerWidth = document.querySelector('.card-catalogue').offsetWidth
    } catch (e) {
      // Get body width and cut by 0.953 to get approximate .card-catalogue width
      containerWidth = window.innerWidth * 0.953
    }
    // Width of each Book in pixels
    const elementWidth = 270
    const numPhantomElements = getNumPhantomElements({
      numElements: myLibrary.length,
      elementWidth,
      margin: 5,
      containerWidth,
    })
    return numPhantomElements
  }
}

export default GetNumPhantoms