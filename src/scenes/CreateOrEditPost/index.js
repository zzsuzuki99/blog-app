import React, { Component } from 'react'
// import './styles.css'
import { convertToRaw } from 'draft-js'
import draftToHtml from 'draftjs-to-html'
import withNavBar from '../withNavBar'
import { Editor } from 'react-draft-wysiwyg'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { addPost } from '../../actions/creators/posts'
class CreateOrEditPostScreen extends Component {
  constructor (props) {
    super(props)
    this.onEditorStateChange = this.onEditorStateChange.bind(this)
    this.state = {
      editorState: null
    }
  }

  onEditorStateChange (editorState) {
    this.setState({
      htmlContent: draftToHtml(convertToRaw(editorState.getCurrentContent()))
    })
  }

  render () {
    return (
      <div>
        <Editor
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          onEditorStateChange={this.onEditorStateChange}
        />
        <button
          onClick={() =>
            this.props.addPost({ content: this.state.htmlContent })
          }
        >
          Save
        </button>
      </div>
    )
  }
}

const EnhanceCreateOrEditPostScreen = withNavBar(CreateOrEditPostScreen)

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addPost
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EnhanceCreateOrEditPostScreen)
