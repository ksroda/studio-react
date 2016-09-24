import React, { Component, PropTypes } from 'react'
import { Field, reduxForm } from 'redux-form'
import { TextField, Checkbox } from 'redux-form-material-ui'

import HeaderButtons from '../../../../../components/HeaderButtons/HeaderButtons'

import style from './UserCreateForm.scss'

function validate (values) {
  const errors = {}

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
    const roles = ['SuperAdmin', 'Admin', 'Student', 'Teacher']
    return (
      <form onSubmit={handleSubmit(this.handleSubmit)}>
        <HeaderButtons
          title="Dodaj użytkownika"
          buttons={[
            {
              type: 'submit',
              label: editMode ? 'Zapisz' : 'Dodaj',
              primary: true
            }
          ]}
        />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div className={style.formRow}>
            <Field name="fullName" component={TextField} floatingLabelText="Imię i nazwisko" />
            <Field name="email" component={TextField} floatingLabelText="Email" type="email" />
          </div>
          <div className={style.formRow} style={{ marginBottom: 30 }}>
            <Field name="username" component={TextField} floatingLabelText="Nazwa użytkownika" />
          </div>
          {
            roles.map(item => (
              <Field name={item} component={Checkbox} label={item} style={{ marginTop: 10 }} />
            ))
          }
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
  form: 'user',
  validate
})(QuestionCreateForm)
