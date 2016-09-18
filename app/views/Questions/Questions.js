import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import { getAllQuestions } from '../../actions'

class Questions extends Component {
  componentDidMount () {
    const { dispatch } = this.props
    dispatch(getAllQuestions())
  }

  render () {
    const { children } = this.props
    const labels = ['Treść pytania', 'Przedmiot', 'Autor', 'Data modyfikacji']
    return (
      <div>
        <h3>Wszystkie pytania</h3>
        <table>
          <thead>
            <tr>
            {
              labels.map(label => <th>{label}</th>)
            }
            </tr>
          </thead>
          <tbody>

          </tbody>
        </table>
      </div>
    )
  }
}

function select (state) {
  return {
    allQuestions: state.app.allQuestions
  }
}

export default connect()(Questions)
