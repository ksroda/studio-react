import React, { Component, PropTypes } from 'react'
import { Field, reduxForm } from 'redux-form'
import { browserHistory } from 'react-router'

import { Checkbox, TextField } from 'redux-form-material-ui'
import RaisedButton from 'material-ui/RaisedButton'

import API from '../../../api'

import style from './LoginForm.scss'

class LoginForm extends Component {
  constructor () {
    super()

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (values) {
    const { setAllowedToSeeContent } = this.props
    const { username, password } = values
    // API.login.post({ username, password, grant_type: 'password' })
    Promise.resolve()
      .then((response) => {
        setAllowedToSeeContent(true)
        // sessionStorage.setItem('token', response.data.access_token)
        browserHistory.push('/home')
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render () {
    const { handleSubmit } = this.props
    return (
      <form onSubmit={handleSubmit(this.handleSubmit)}>
        <div className={style.form}>
          <img alt="" src="/images/logo.png" width="100" />
          <Field
            name="username"
            component={TextField}
            floatingLabelText="Nazwa użytkownika"
            className={style.input}
          />
          <Field
            name="password"
            component={TextField}
            floatingLabelText="Hasło"
            type="password"
            className={style.input}
          />
          <Field
            name="rememberMe"
            component={Checkbox}
            label="Zapamiętaj mnie"
            className={style.checkbox}
          />
          <RaisedButton type="submit" label="Zaloguj" primary />
        </div>
      </form>
    )
  }
}

LoginForm.propTypes = {
  handleSubmit: PropTypes.func,
  setAllowedToSeeContent: PropTypes.func
}

export default reduxForm({
  form: 'login'
})(LoginForm)

