import _ from 'lodash'
import React, { Component, PropTypes } from 'react'
import { Field, reduxForm } from 'redux-form'
import { TextField, DatePicker, SelectField } from 'redux-form-material-ui'

import MenuItem from 'material-ui/MenuItem'
import HeaderButtons from '../../../../components/HeaderButtons/HeaderButtons'

import { editQuestion } from '../../actions'
import API from '../../../../api'

import style from './QuestionCreateForm.scss'

const requiredFields = ['subject', 'name', 'to', 'content', 'answerA', 'answerB', 'answerC', 'answerD']

function validate (values) {
  const errors = _
    .chain(requiredFields)
    .reduce((acc, field) => ({
      ...acc,
      ...(
        !values[field]
          ? { [field]: 'To pole jest wymagane' }
          : null
      )
    }), {})
    .value()

  return errors
}

class QuestionCreateForm extends Component {
  constructor () {
    super()

    this.handleSubmit = this.handleSubmit.bind(this)
  }



  handleSubmit (values) {
    const { id, name, content, to, isActive } = values
    const { dispatch } = this.props
    const api = !id
      ?
        Promise.resolve()
      :
        dispatch(editQuestion(id, {
          Name: name,
          Content: content,
          To: to,
          IsActive: isActive
        }))

    api
      .then((response) => {
        console.log('done!', response)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  render () {
    const { handleSubmit, editMode, subjects } = this.props
    return (
      <form onSubmit={handleSubmit(this.handleSubmit)}>
        <HeaderButtons
          title="Dodaj pytanie"
          buttons={[
            {
              type: 'submit',
              label: editMode ? 'Zapisz' : 'Dodaj',
              primary: true
            }
          ]}
        />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Field
            name="author"
            component={TextField}
            floatingLabelText="Autor"
            underlineDisabledStyle={{
              borderBottomStyle: 'solid',
              borderBottomWidth: '1px',
              borderBottomColor: '#ebebeb'
            }}
            disabled
            fullWidth
          />
          <Field
            name="subject"
            component={SelectField}
            floatingLabelText="Przedmiot"
            underlineDisabledStyle={{
              borderBottomStyle: 'solid',
              borderBottomWidth: '1px',
              borderBottomColor: '#ebebeb'
            }}
            disabled={editMode}
            style={{ width: '99.6%' }}
          >
            {
              subjects.map(subject => (
                <MenuItem value={subject.name} primaryText={subject.name} />
              ))
            }
          </Field>
          <div className={style.formRow}>
            <Field name="name" component={TextField} floatingLabelText="Nazwa" fullWidth />
            <Field name="to" component={DatePicker} floatingLabelText="Do" />
          </div>
          <Field name="content" component={TextField} floatingLabelText="Treść pytania" style={{ marginBottom: 30 }} fullWidth />
          <Field name="answerA" component={TextField} floatingLabelText="Odpowiedź A" fullWidth />
          <Field name="answerB" component={TextField} floatingLabelText="Odpowiedź B" fullWidth />
          <Field name="answerC" component={TextField} floatingLabelText="Odpowiedź C" fullWidth />
          <Field name="answerD" component={TextField} floatingLabelText="Odpowiedź D" fullWidth />
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
  form: 'question',
  validate
})(QuestionCreateForm)
