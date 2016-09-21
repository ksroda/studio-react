import _ from 'lodash'
import React, { Component, PropTypes } from 'react'

import CircularProgress from 'material-ui/CircularProgress'

import QuestionCreateForm from './QuestionCreateForm/QuestionCreateForm'
import API from '../../api'

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
    const { params: { id } } = this.props
    if (id) {
      API.questions.getQuestion({ id })
        .then((response) => {
          this.setState({
            question: response.data,
            isFetching: false
          })
        })
    }
  }

  render () {
    const { question, isFetching } = this.state
    const { params: { id } } = this.props
    return (
      <div className={style.container}>
        {
          isFetching && !!id
            ?
            <CircularProgress className={style.loading} />
            :
            <QuestionCreateForm
              initialValues={!id ? {} : {
                content: question.content,
                answer0: question.answers[0].content,
                answer1: question.answers[1].content,
                answer2: question.answers[2].content,
                answer3: question.answers[3].content
              }}
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

export default QuestionCreate
