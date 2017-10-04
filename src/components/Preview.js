import React, { Component } from 'react'
import { connect } from 'react-redux'
import unicodeEscape from 'unicode-escape'

@connect(state => ({
  language: state.language
}), dispatch => ({}))
class Preview extends Component {
  render() {
    const { language } = this.props
    return (
      <div className="preview-container container">
        <pre>
          <code>
            tinymce.addI18n('ko_KR',{'{\n'}
            {Object.entries(language).map(lang => {
              let [key, value] = lang
              return `"${key}": "${unicodeEscape(value)}"`
            }).join(',\n')}
            {'\n}'});
          </code>
        </pre>
      </div>
    )
  }
}

export default Preview