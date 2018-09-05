import React, { Component } from 'react'
// import './styles.css'
import withNavBar from '../withNavBar'
import TextEditor from '../../components/TextEditor'
import { Editor } from 'react-draft-wysiwyg'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
class CreateOrEditPostScreen extends Component {
  constructor (props) {
    super(props)
    this.onEditorStateChange = this.onEditorStateChange.bind(this)
  }

  onEditorStateChange () {}

  render () {
    return (
      <Editor
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        onEditorStateChange={this.onEditorStateChange}
      />
    )
  }
}

const EnhanceCreateOrEditPostScreen = withNavBar(CreateOrEditPostScreen)

export default EnhanceCreateOrEditPostScreen
