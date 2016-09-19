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

class Form extends Component {
  constructor () {
    super()

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (values) {
    console.log(values)
  }

  render () {
    const { handleSubmit } = this.props
    return (
      <form onSubmit={handleSubmit(this.handleSubmit)}>
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
