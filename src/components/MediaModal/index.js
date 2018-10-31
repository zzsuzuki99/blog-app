import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap'
import PropTypes from 'prop-types'
import './styles.css'
import { uploadFile, getAllMedia } from '../../actions/creators/media'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class MediaModalComponent extends Component {
  constructor (props, context) {
    super(props, context)

    // this.handleShow = this.handleShow.bind(this)
    // this.handleClose = this.handleClose.bind(this)

    this.state = {
      show: false
    }
  }

  componentDidMount () {
    this.props.getAllMedia()
  }

  onUploadFilePress = () => {
    this.upload.click()
  }

  onChangeFile = e => {
    this.props.uploadFile(e.target.files[0])
  }

  render () {
    console.log('Files>>>', this.props.files)
    // const popover = (
    //   <Popover id="modal-popover" title="popover">
    //     very popover. such engagement
    //   </Popover>
    // )
    // const tooltip = <Tooltip id="modal-tooltip">wow.</Tooltip>

    return (
      <Modal
        bsSize="large"
        aria-labelledby="contained-modal-title-lg"
        show={this.props.isShow}
        onHide={this.props.handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Media</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="content">
            <button
              type="button"
              className="btn btn-info"
              onClick={this.onUploadFilePress}
            >
              Upload File
            </button>
            <div className="list-media" />
            <input
              id="myInput"
              type="file"
              ref={ref => (this.upload = ref)}
              style={{ display: 'none' }}
              onChange={this.onChangeFile.bind(this)}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

MediaModalComponent.propTypes = {
  isShow: PropTypes.bool,
  handleClose: PropTypes.func,
  onUploadFilePress: PropTypes.func,
  uploadFile: PropTypes.func,
  files: PropTypes.array,
  getAllMedia: PropTypes.func
}

const mapStateToProps = state => ({
  files: state.common.files
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      uploadFile,
      getAllMedia
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MediaModalComponent)
