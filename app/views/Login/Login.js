import React, { Component } from 'react'
import { connect } from 'react-redux'

import Paper from 'material-ui/Paper'

import LoginForm from './LoginForm/LoginForm'

import style from './Login.scss'

class Login extends Component {
  render () {
    return (
      <Paper className={style.login}>
        <LoginForm />
      </Paper>
    )
  }
}

export default connect()(Login)
