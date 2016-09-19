import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'

import QuestionCreateForm from './QuestionCreateForm/QuestionCreateForm'

import { getAllQuestions } from '../../actions'

class QuestionCreate extends Component {
  componentDidMount () {
    const { dispatch, allQuestions } = this.props
    if (allQuestions === undefined) {
      dispatch(getAllQuestions())
    }
  }

  render () {
    console.log(this.props.question)
    return (
      <div>
        <QuestionCreateForm initialValues={this.props.question} />
      </div>
    )
  }
}

function select (state, { params: { id } }) {
  return {
    question: _.find(state.questions.all || [], { id }),
    allQuestions: state.questions.all
  }
}

export default connect(select)(QuestionCreate)
