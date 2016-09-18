import React, { Component } from 'react'
import { connect } from 'react-redux'

import RaisedButton from 'material-ui/RaisedButton'

import { login } from '../../actions'

class Login extends Component {
  render () {
    const { dispatch } = this.props
    return (
      <div>
        <RaisedButton label="Zaloguj" onClick={() => dispatch(login())} primary />
      </div>
    )
  }
}

export default connect()(Login)
