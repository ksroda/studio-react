import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'

import CircularProgress from 'material-ui/CircularProgress'

import HeaderButtons from '../../../../components/HeaderButtons/HeaderButtons'
import Table from '../../../../components/Table/Table'
import { getAllQuestions } from '../../actions'

import style from '../QuestionsList.scss'

class QuestionsAll extends Component {
  constructor () {
    super()

    this.handleEdit = this.handleEdit.bind(this)
    this.handleNewQuestion = this.handleNewQuestion.bind(this)
  }

  componentDidMount () {
    const { dispatch, questions } = this.props

    if (questions.length === 0) {
      dispatch(getAllQuestions())
    }
  }

  handleNewQuestion () {
    const { router } = this.context
    router.push('/home/questions/create')
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
      { text: 'Od?', prop: 'from', transform: item => moment(new Date(item)).lang('pl').format('LLL') }
    ]
    return (
      <div>
        <HeaderButtons
          title="Wszystkie pytania"
          buttons={[
            {
              label: 'Dodaj pytanie',
              primary: true,
              onClick: this.handleNewQuestion
            }
          ]}
        />
        {
          isFetching
            ? <CircularProgress className={style.loading} />
            :
              <Table
                tableClassname={style.table}
                items={questions}
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
