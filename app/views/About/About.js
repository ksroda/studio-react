import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import FlatButton from 'material-ui/FlatButton'

import { increaseCounter, decreaseCounter, asyncDoubleIncrease, openSnackbar } from '../../actions'
import { snackbarTypes } from '../../components/Snackbar/Snackbar'

import style from './About.scss'

function About ({ counter, dispatch }) {
  return (
    <div className={style.about}>
      <h2>About {counter}</h2>
      <h1>Home</h1>
      <FlatButton label="INC" onClick={() => dispatch(increaseCounter())} />
      <FlatButton label="DEC" onClick={() => dispatch(decreaseCounter())} />
      <FlatButton label="ASYNC INC" onClick={() => dispatch(asyncDoubleIncrease())} />

      <FlatButton label="LOADING SNACKBAR" onClick={() => dispatch(openSnackbar({ message: 'Dodawanie pytania', type: snackbarTypes.LOADING }))} />
      <FlatButton label="SUCCESS SNACKBAR" onClick={() => dispatch(openSnackbar({ message: 'Pytanie dodane', type: snackbarTypes.SUCCESS }))} />
      <FlatButton label="ERROR SNACKBAR" onClick={() => dispatch(openSnackbar({ message: 'Błąd przy dodawaniu pytania', type: snackbarTypes.ERROR }))} />
    </div>
  )
}

About.propTypes = {
  counter: PropTypes.number,
  dispatch: PropTypes.func
}

function select (state) {
  return {
    counter: state.app.counter
  }
}

export default connect(select)(About)
