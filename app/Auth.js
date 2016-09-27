import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'

import injectTapEventPlugin from 'react-tap-event-plugin'

import Snackbar from './components/Snackbar/Snackbar'

import { setProfile } from './actions'
import API from './api'

class Auth extends Component {
  constructor () {
    super()

    this.setAllowedToSeeContent = this.setAllowedToSeeContent.bind(this)

    this.state = {
      allowedToSeeContent: false
    }
  }

  componentWillMount () {
    injectTapEventPlugin()
  }

  componentDidMount () {
    const { location: { pathname: path }, dispatch } = this.props
    const { router } = this.context

    API.user.me()
      .then(response => {
        dispatch(setProfile(response.data))
        this.setState({
          allowedToSeeContent: true
        })
        if (path === '/' || path === '/login') {
          router.push('/home')
        }
      })
      .catch(() => {
        router.push('/login')
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
    return (
      <div>
        {
          React.cloneElement(children, {
            allowedToSeeContent,
            setAllowedToSeeContent: this.setAllowedToSeeContent
          })
        }
        <Snackbar />
      </div>
    )
  }
}

Auth.propTypes = {
  children: PropTypes.node,
  location: PropTypes.object
}

Auth.contextTypes = {
  router: PropTypes.object
}

export default connect()(Auth)
