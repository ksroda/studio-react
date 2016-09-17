import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

import Input from '../../components/Input/Input'

function validate (values) {
  const errors = {}
  if (!values.name) {
    errors.name = 'This field is required'
  }
  return errors
}

function handleSubmit (a, b, c) {
  c.preventDefault()
  console.log(a, b, c)
}

class Form extends Component {
  render () {
    // const { handleSubmit } = this.props
    return (
      <form onSubmit={handleSubmit}>
        <Field name="name" component={Input} type="text" floatingLabelText="Name" />
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default reduxForm({
  form: 'contact',
  validate
})(Form)
