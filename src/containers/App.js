import React, { Component } from 'react'

import Editor from '../components/Editor'
import Preview from '../components/Preview'
import '../styles/index.css'
import '../modules/tinymce-polyfill'
import '../ko_KR'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Editor />
        <Preview />
      </div>
    )
  }
}

export default App
