import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'

import CircularProgress from 'material-ui/CircularProgress'

import QuestionsTable from '../../../components/QuestionsTable/QuestionsTable'
import { getAllQuestions } from '../actions'

import style from '../QuestionsList.scss'

class QuestionsAll extends Component {
  constructor () {
    super()

    this.handleEdit = this.handleEdit.bind(this)
  }

  componentDidMount () {
    const { dispatch, questions } = this.props

    if (questions.length === 0) {
      dispatch(getAllQuestions())
    }
  }

  handleEdit (id) {
    const { router } = this.context
    router.push(`/home/questions/edit/${id}`)
  }

  render () {
    const { questions, isFetching } = this.props
    const labels = [
      { text: 'Treść pytania', prop: 'content' },
      { text: 'Przedmiot', prop: 'subject' },
      { text: 'Autor', prop: 'creatorFirstName,creatorLastName' },
      { text: 'Od?', prop: 'from' }
    ]
    return (
      <div>
        <h3>Wszystkie pytania</h3>
        {
          isFetching
            ? <CircularProgress className={style.loading} />
            :
              <QuestionsTable
                tableClassname={style.table}
                questions={questions}
                labels={labels}
                handleEdit={this.handleEdit}
              />
        }
      </div>
    )
  }
}

QuestionsAll.propTypes = {
  dispatch: PropTypes.func,
  questions: PropTypes.array,
  isFetching: PropTypes.isFetching
}

QuestionsAll.contextTypes = {
  router: PropTypes.object
}

function select (state) {
  return {
    questions: state.questions.all.data,
    isFetching: state.questions.all.isFetching
  }
}

export default connect(select)(QuestionsAll)
