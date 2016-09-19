import React, { PropTypes, Component } from 'react'

import API from './api'

class Auth extends Component {
  componentWillMount () {
    const { location: { pathname: path } } = this.props
    const { router } = this.context

    API.user.me()
      .then(response => {
        if (path === '/' || path === '/login') {
          router.push('/home')
        }
      })
      .catch(error => {
        router.push('/login')
      })
  }

  render () {
    return this.props.children
  }
}

Auth.propTypes = {
  children: PropTypes.node,
  location: PropTypes.object
}

Auth.contextTypes = {
  router: PropTypes.object
}

export default Auth
