import React, { Component, PropTypes } from 'react'
import { Field, reduxForm } from 'redux-form'
import { browserHistory } from 'react-router'

import RaisedButton from 'material-ui/RaisedButton'

import Input from '../../../components/Input/Input'
import API from '../../../api'

import style from './LoginForm.scss'

function validate (values) {
  const errors = {}

  if (!values.username) {
    errors.username = 'Pole wymagane'
  }

  if (!values.password) {
    errors.password = 'Pole wymagane'
  }

  return errors
}

class LoginForm extends Component {
  constructor () {
    super()

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (values) {
    const { username, password } = values
    console.log(values)
    API.login.post({ username, password, grant_type: 'password' })
      .then((response) => {
        sessionStorage.setItem('token', response.data.access_token)
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
          <Field name="username" component={Input} floatingLabelText="Nazwa użytkownika" />
          <Field name="password" component={Input} floatingLabelText="Hasło" type="password" />
          <RaisedButton type="submit" label="Zaloguj" primary />
        </div>
      </form>
    )
  }
}

LoginForm.propTypes = {
  handleSubmit: PropTypes.func
}

export default reduxForm({
  form: 'login',
  validate
})(LoginForm)

