import _ from 'lodash'
import React, { Component, PropTypes } from 'react'

import CircularProgress from 'material-ui/CircularProgress'

import UserCreateForm from './UserCreateForm/UserCreateForm'
import API from '../../../../api'

import style from './UserCreate.scss'

class UserCreate extends Component {
  constructor () {
    super()

    this.state = {
      user: {},
      isFetching: true
    }
  }

  componentWillMount () {
    const { params: { id } } = this.props
    if (id) {
      // API.users.getQuestion({ id })
      Promise.reject()
        .then((response) => {
          this.setState({
            user: response.data,
            isFetching: false
          })
        })
        .catch(() => {})
    }
  }

  render () {
    const { user, isFetching } = this.state
    const { params: { id } } = this.props
    return (
      <div className={style.container}>
        {
          isFetching && !!id
            ?
            <CircularProgress className={style.loading} />
            :
            <UserCreateForm
              initialValues={!id ? {} : {}}
              editMode={!!user.id}
            />
        }
      </div>
    )
  }
}

UserCreate.propTypes = {
  params: PropTypes.object
}

export default UserCreate
