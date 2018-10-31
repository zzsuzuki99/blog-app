import React from 'react'
import NavBar from '../components/NavBar'
const withNavBar = WrappedComponent => {
  const screen = props => {
    return (
      <div>
        <WrappedComponent {...props} />
      </div>
    )
  }
  return screen
}

export default withNavBar
