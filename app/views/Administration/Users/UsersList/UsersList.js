import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'

import CircularProgress from 'material-ui/CircularProgress'

import HeaderButtons from '../../../../components/HeaderButtons/HeaderButtons'
import Table from '../../../../components/Table/Table'

import style from './UsersList.scss'

class QuestionsAll extends Component {
  constructor () {
    super()

    this.handleEdit = this.handleEdit.bind(this)
    this.handleNewUser = this.handleNewUser.bind(this)
  }

  componentDidMount () {
    const { dispatch, questions } = this.props

    if (questions.length === 0) {
      dispatch(getUsers())
    }
  }

  handleNewUser () {
    const { router } = this.context
    router.push('/home/administration/users/create')
  }

  handleEdit (id) {
    const { router } = this.context
    router.push(`/home/administration/users/edit/${id}`)
  }

  render () {
    // const { users, isFetching } = this.props
    const users = [
      {

      }
    ]
    const labels = [
      { text: 'Treść pytania', prop: 'content' },
      { text: 'Przedmiot', prop: 'subject' },
      { text: 'Autor', prop: 'creatorFirstName,creatorLastName' },
      { text: 'Od?', prop: 'from' }
    ]
    return (
      <div>
        <HeaderButtons
          title="Użytkownicy"
          buttons={[
            {
              label: 'Dodaj użytkownika',
              primary: true,
              onClick: this.handleNewUser
            }
          ]}
        />
        {
          true // isFetching
            ? <CircularProgress className={style.loading} />
            :
            <Table
              tableClassname={style.table}
              items={users}
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
  users: PropTypes.array,
  isFetching: PropTypes.isFetching
}

QuestionsAll.contextTypes = {
  router: PropTypes.object
}

function select (state) {
  return {
    // users: state.administration.users.all.data,
    // isFetching: state.administration.users.all.data,
  }
}

export default connect(select)(QuestionsAll)
