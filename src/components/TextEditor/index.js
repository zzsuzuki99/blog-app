import React, { Component } from 'react'
import './styles.css'

class TextEditor extends Component {
  constructor (props) {
    super(props)
    this.state = {
      document: null
    }
  }
  componentDidMount () {
    this.textInput.contentDocument.designMode = 'on'
  }

  onEditorChange = event => {}

  onBoldClick = () => {
    this.textInput.contentDocument.execCommand('Bold')
  }

  onItalicClick = () => {
    this.textInput.contentDocument.execCommand('Italic')
  }

  onUnderClick = () => {
    // this.textInput.contentDocument.execCommand('Underline')
    this.setState({
      document: this.textInput.contentDocument.body.innerHTML
    })

    this.display.innerHTML = this.textInput.contentDocument.body.innerHTML
  }

  render () {
    return (
      <div className="text-editor-container">
        <input onChange={this.onEditorChange.bind(this)} />
        <iframe
          ref={input => (this.textInput = input)}
          onLoad={this.onEditorChange.bind(this)}
          id="text-editor"
          onChange={this.onEditorChange.bind(this)}
          frameBorder="0"
        />
        <button type="button" onClick={this.onBoldClick} className="btn">
          <strong>B</strong>
        </button>
        <button type="button" onClick={this.onItalicClick} className="btn">
          <i>I</i>
        </button>
        <button type="button" onClick={this.onUnderClick} className="btn">
          <u>U</u>
        </button>
        <div ref={input => (this.display = input)} id="text-editor" />
      </div>
    )
  }
}

export default TextEditor
