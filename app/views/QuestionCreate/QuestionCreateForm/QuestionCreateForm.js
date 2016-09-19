import React, { Component, PropTypes } from 'react'
import { Field, reduxForm } from 'redux-form'

import RaisedButton from 'material-ui/RaisedButton'

import Input from '../../../components/Input/Input'

function validate (values) {
  const errors = {}
  if (!values.content) {
    errors.content = 'This field is required'
  }
  return errors
}

class QuestionCreateForm extends Component {
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
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Field name="content" component={Input} floatingLabelText="Treść pytania" fullWidth />
          <Field name="answers[0].content" component={Input} floatingLabelText="Odpowiedź A" fullWidth />
          <Field name="answerB" component={Input} floatingLabelText="Odpowiedź B" fullWidth />
          <Field name="answerC" component={Input} floatingLabelText="Odpowiedź C" fullWidth />
          <Field name="answerD" component={Input} floatingLabelText="Odpowiedź D" fullWidth />
          <RaisedButton type="submit" label="Dodaj" primary />
        </div>
      </form>
    )
  }
}

QuestionCreateForm.propTypes = {
  handleSubmit: PropTypes.func
}

export default reduxForm({
  form: 'contact',
  validate
})(QuestionCreateForm)
