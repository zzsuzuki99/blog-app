import React, { Component } from 'react'
import ReactLoading from 'react-loading'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
class LoadingComponent extends Component {
  render () {
    return this.props.isLoading ? (
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <ReactLoading type={'bars'} color={'red'} height={150} width={100} />
      </div>
    ) : null
  }
}

const mapStateToProps = state => ({
  isLoading: state.ui.isLoading
})

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoadingComponent)
