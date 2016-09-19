import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'

import IconButton from 'material-ui/IconButton'
import EditIcon from 'material-ui/svg-icons/content/create'

import { getAllQuestions } from '../../../actions'

import style from '../QuestionsList.scss'

class QuestionsAll extends Component {
  componentDidMount () {
    const { dispatch, allQuestions } = this.props
    if (allQuestions === undefined) {
      dispatch(getAllQuestions())
    }
  }

  render () {
    const { allQuestions } = this.props
    const labels = [
      { text: 'Treść pytania', prop: 'content' },
      { text: 'Przedmiot', prop: 'subject' },
      { text: 'Autor', prop: 'creatorFirstName,creatorLastName' },
      { text: 'Od?', prop: 'from' }
    ]
    return (
      <div>
        <h3>Wszystkie pytania</h3>
        <table className={style.table}>
          <thead>
            <tr>
              {
                labels.map((label, i) => (
                  <th key={`th-${i}`}>
                    {label.text}
                  </th>
                ))
              }
              <td></td>
            </tr>
          </thead>
          <tbody>
            {
              (allQuestions || []).map((question, q) => (
                <tr key={`question-${q}`}>
                  {
                    labels.map((label, l) => (
                      <td key={`label-${l}`}>
                        {
                          label.prop.split(',').map(item => question[item]).join(' ')
                        }
                      </td>
                    ))
                  }
                  <td>
                    <IconButton><EditIcon /></IconButton>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    )
  }
}


QuestionsAll.propTypes = {
  dispatch: PropTypes.func,
  allQuestions: PropTypes.array
}

function select (state) {
  return {
    allQuestions: state.questions.all
  }
}

export default connect(select)(QuestionsAll)
