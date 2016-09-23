import React, { PropTypes, Component } from 'react'

import API from './api'

import injectTapEventPlugin from 'react-tap-event-plugin'

class Auth extends Component {
  constructor () {
    super()

    this.setAllowedToSeeContent = this.setAllowedToSeeContent.bind(this)

    this.state = {
      allowedToSeeContent: true
    }
  }

  componentWillMount () {
    injectTapEventPlugin()
  }

  componentDidMount () {
    const { location: { pathname: path } } = this.props
    const { router } = this.context

    // router.push('/login')
    API.user.me()
      .then(response => {
        this.setState({
          allowedToSeeContent: true
        })
        if (path === '/' || path === '/login') {
          router.push('/home')
        }
      })
      .catch(error => {
        // router.push('/login')
      })
  }

  setAllowedToSeeContent (allowedToSeeContent) {
    this.setState({
      allowedToSeeContent
    })
  }

  render () {
    const { allowedToSeeContent } = this.state
    const { children } = this.props
    return React.cloneElement(children, {
      allowedToSeeContent,
      setAllowedToSeeContent: this.setAllowedToSeeContent
    })
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
