import React, { Component } from 'react'
import { browserHistory } from 'react-router'

class Auth extends Component {
  componentDidMount () {
    if (!localStorage.getItem('token')) {
      browserHistory.push('/login')
    }
  }

  render () {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default Auth
