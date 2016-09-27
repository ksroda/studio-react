import _ from 'lodash'
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import CircularProgress from 'material-ui/CircularProgress'
import QuestionCreateForm from './QuestionCreateForm/QuestionCreateForm'

import { getSubjects } from '../actions'
import API from '../../../api'

import style from './QuestionCreate.scss'

class QuestionCreate extends Component {
  constructor () {
    super()

    this.state = {
      question: {},
      isFetching: true
    }
  }

  componentWillMount () {
    const { params: { id }, dispatch, subjects } = this.props
    if (id) {
      API.questions.getQuestion({ id })
        .then((response) => {
          this.setState({
            question: response.data,
            isFetching: false
          })
        })
    }
    if (!subjects.length) {
      dispatch(getSubjects())
    }
  }

  render () {
    const { question, isFetching } = this.state
    const { params: { id }, subjects, profile, dispatch } = this.props
    return (
      <div className={style.container}>
        {
          isFetching && !!id
            ?
              <CircularProgress className={style.loading} />
            :
              <QuestionCreateForm
                dispatch={dispatch}
                subjects={subjects}
                initialValues={!id
                  ?
                    {
                      author: profile.fullName
                    }
                  :
                    {
                      ...question,
                      author: `${question.creatorFirstName} ${question.creatorLastName}`,
                      to: new Date(question.to),
                      answerA: question.answers[0].content,
                      answerB: question.answers[1].content,
                      answerC: question.answers[2].content,
                      answerD: question.answers[3].content
                    }
                }
                editMode={!!question.id}
              />
        }
      </div>
    )
  }
}

QuestionCreate.propTypes = {
  params: PropTypes.object
}

function select (state) {
  return {
    subjects: state.questions.subjects.data,
    profile: state.app.profile
  }
}

export default connect(select)(QuestionCreate)
