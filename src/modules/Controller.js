import React from 'react'
import ReactDOM from 'react-dom'
import App from '../reactModules/App'
import { loadData } from './Storage'

const openLibrary = () => {
  const myLibrary = loadData()

  ReactDOM.render(<App myLibrary={myLibrary}/>, document.getElementById('root'))
}

export { openLibrary }
