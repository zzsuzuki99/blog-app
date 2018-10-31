import React, { Component } from 'react'
import { convertToRaw } from 'draft-js'
import draftToHtml from 'draftjs-to-html'
import { Editor } from 'react-draft-wysiwyg'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { addPost } from '../../actions/creators/posts'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import './styles.css'
import FormData from 'form-data'
import MediaModalComponent from '../../components/MediaModal'

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

  uploadImageCallBack (file) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest()
      xhr.open('POST', 'https://api.imgur.com/3/image')
      xhr.setRequestHeader('Authorization', 'Client-ID 8d26ccd12712fca')
      const data = new FormData()
      data.append('image', file)
      xhr.send(data)
      xhr.addEventListener('load', () => {
        const response = JSON.parse(xhr.responseText)
        resolve(response)
      })
      xhr.addEventListener('error', () => {
        const error = JSON.parse(xhr.responseText)
        reject(error)
      })
    })
  }

  render () {
    return (
      <div className="container" style={{ marginTop: 32 }}>
        <p>Tiêu đề</p>
        <input style={{ width: '100%' }} />
        <p style={{ marginTop: 16 }}>Nội dung</p>
        <button
          type="button"
          className="btn btn-info"
          onClick={() => {
            this.setState({
              isShowMediaModal: true
            })
          }}
        >
          Add Media
        </button>
        <Editor
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapper-view"
          editorClassName="editor-view"
          onEditorStateChange={this.onEditorStateChange}
          placeholder="Begin typing..."
          toolbar={{
            image: {
              uploadCallback: this.uploadImageCallBack.bind(this),
              alt: { present: true, mandatory: true }
            }
          }}
        />
        <button
          style={{ marginTop: 16 }}
          onClick={() => {
            this.props.addPost({ content: this.state.htmlContent }, () => {
              this.props.history.push('/')
            })
          }}
        >
          Save
        </button>
        <MediaModalComponent
          isShow={this.state.isShowMediaModal}
          handleClose={() => {
            this.setState({
              isShowMediaModal: false
            })
          }}
        />
      </div>
    )
  }
}

CreateOrEditPostScreen.propTypes = {
  addPost: PropTypes.func,
  history: PropTypes.object
}

const EnhanceCreateOrEditPostScreen = withRouter(CreateOrEditPostScreen)

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addPost
    },
    dispatch
  )

// const CreateOrEditPostScreenRedux = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(EnhanceCreateOrEditPostScreen)
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EnhanceCreateOrEditPostScreen)

// export default withRouter(CreateOrEditPostScreenRedux)
