import React, { Component, PropTypes } from 'react'
import { Field, reduxForm } from 'redux-form'

import RaisedButton from 'material-ui/RaisedButton'

import Input from '../../../components/Input/Input'

function validate (values) {
  const errors = {}
  if (!values.content) {
    errors.content = 'This field is required'
  }
  if (!values.answer0) {
    errors.answer0 = 'This field is required'
  }
  if (!values.answer1) {
    errors.answer1 = 'This field is required'
  }
  if (!values.answer2) {
    errors.answer2 = 'This field is required'
  }
  if (!values.answer3) {
    errors.answer3 = 'This field is required'
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
    const { handleSubmit, editMode } = this.props
    return (
      <form onSubmit={handleSubmit(this.handleSubmit)}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Field name="content" component={Input} floatingLabelText="Treść pytania" style={{ marginBottom: 20 }} fullWidth />
          <Field name="answer0" component={Input} floatingLabelText="Odpowiedź A" fullWidth />
          <Field name="answer1" component={Input} floatingLabelText="Odpowiedź B" fullWidth />
          <Field name="answer2" component={Input} floatingLabelText="Odpowiedź C" fullWidth />
          <Field name="answer3" component={Input} floatingLabelText="Odpowiedź D" fullWidth />
          <RaisedButton type="submit" label={editMode ? 'Zapisz' : 'Dodaj'} style={{ marginTop: 30 }} primary />
        </div>
      </form>
    )
  }
}

QuestionCreateForm.propTypes = {
  handleSubmit: PropTypes.func,
  editMode: PropTypes.bool
}

export default reduxForm({
  form: 'contact',
  validate
})(QuestionCreateForm)
