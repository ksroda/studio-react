import React, { Component } from 'react'
import { connect } from 'react-redux'

import Paper from 'material-ui/Paper'

import LoginForm from './LoginForm/LoginForm'

import style from './Login.scss'

class Login extends Component {
  render () {
    return (
      <Paper className={style.login}>
        <LoginForm {...this.props} />
      </Paper>
    )
  }
}

function select (state) {
  return {
    loggingIn: state.app.loggingIn
  }
}

export default connect(select)(Login)
