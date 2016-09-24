import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import cx from 'classnames'

import SnackbarMUI from 'material-ui/Snackbar'
import SuccessIcon from 'material-ui/svg-icons/navigation/check'
import ErrorIcon from 'material-ui/svg-icons/navigation/close'
import CircularProgress from 'material-ui/CircularProgress'

import { closeSnackbar } from '../../actions'

import style from './Snackbar.scss'

export const snackbarTypes = {
  LOADING: 'LOADING',
  ERROR: 'ERROR',
  SUCCESS: 'SUCCESS'
}

function SnackbarIcon ({ type }) {
  switch (type) {
    case snackbarTypes.LOADING:
      return <CircularProgress size={0.45} color="cyan" className={style.loadingIcon} />
    case snackbarTypes.ERROR:
      return <ErrorIcon className={style.errorIcon} />
    case snackbarTypes.SUCCESS:
      return <SuccessIcon className={style.successIcon} />
    default:
      return null
  }
}

class Snackbar extends Component {
  constructor () {
    super()

    this.handleRequestClose = this.handleRequestClose.bind(this)
  }

  handleRequestClose (reason) {
    const { dispatch, blockedReasons = [] } = this.props
    if (!blockedReasons.includes(reason)) {
      dispatch(closeSnackbar())
    }
  }

  render () {
    const { message, type, ...rest } = this.props
    return (
      <SnackbarMUI
        {...rest}
        className={style.snackbar}
        message={
          <div style={{ display: 'flex' }}>
            {
              [<div className={style.icon}><SnackbarIcon type={type} /></div>, message]
            }
          </div>
        }
        onRequestClose={this.handleRequestClose}
      />
    )
  }
}

Snackbar.propTypes = {
  dispatch: PropTypes.func,
  blockedReasons: PropTypes.array
}

function select (state) {
  return {
    ...state.app.snackbar
  }
}

export default connect(select)(Snackbar)
