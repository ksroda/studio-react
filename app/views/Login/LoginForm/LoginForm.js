import React, { Component, PropTypes } from 'react'
import { Field, reduxForm } from 'redux-form'
import { browserHistory } from 'react-router'
import { Checkbox, TextField } from 'redux-form-material-ui'

import RaisedButton from 'material-ui/RaisedButton'

import { login } from '../../../actions'

import style from './LoginForm.scss'

class LoginForm extends Component {
  constructor () {
    super()

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (values) {
    const { setAllowedToSeeContent, dispatch } = this.props
    dispatch(login({ ...values, setAllowedToSeeContent }))
  }

  render () {
    const { handleSubmit, loggingIn } = this.props
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
          <RaisedButton type="submit" label="Zaloguj" disabled={loggingIn} primary />
        </div>
      </form>
    )
  }
}

LoginForm.propTypes = {
  handleSubmit: PropTypes.func,
  setAllowedToSeeContent: PropTypes.func,
  loggingIn: PropTypes.bool
}

export default reduxForm({
  form: 'login'
})(LoginForm)

