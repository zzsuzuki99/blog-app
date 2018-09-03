import React from 'react'
import NavBar from '../components/NavBar'
const withNavBar = WrappedComponent => {
  const screen = props => {
    return (
      <div>
        <NavBar />
        <WrappedComponent />
      </div>
    )
  }
  return screen
}

export default withNavBar
