import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeValue } from '../modules/language'

@connect(state => ({
  language: state.language
}), dispatch => ({
  handleChangeValue: (key, value) => {
    dispatch(changeValue(key, value))
  }
}))
class Editor extends Component {

  render() {
    const { language, handleChangeValue } = this.props
    return (
      <div className="editor-container container">
        <table className="table">
          <thead>
            <tr>
              <th>key</th>
              <th>번역</th>
            </tr>
          </thead>
          <tbody>
          {Object.entries(language).map(lang => {
            let [key, value] = lang
            return (
              <tr key={key}>
                <td>{key}</td>
                <td><textarea type='text' value={value} onChange={e => {
                  handleChangeValue(key, e.target.value)
                }} /></td>
              </tr>
            )
          })}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Editor