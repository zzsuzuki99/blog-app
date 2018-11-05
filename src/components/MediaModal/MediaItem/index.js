import React, { Component } from 'react'
import './styles.css'
import PropTypes from 'prop-types'
class MediaItem extends Component {
  render () {
    return (
      <div
        className="media-item"
        onClick={() => {
          typeof this.props.onItemClick === 'function' &&
            this.props.onItemClick(this.props.index)
        }}
      >
        <img
          style={{
            width: '150px',
            height: '150px',
            borderStyle: 'solid',
            borderWidth: this.props.isSelected ? '5px' : '0px'
          }}
          src={this.props.url}
        />
      </div>
    )
  }
}

MediaItem.propTypes = {
  url: PropTypes.string,
  onItemClick: PropTypes.func,
  isSelected: PropTypes.bool,
  index: PropTypes.number
}

export default MediaItem
