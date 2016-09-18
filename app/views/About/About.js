import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import FlatButton from 'material-ui/FlatButton'

import { increaseCounter, decreaseCounter, asyncDoubleIncrease } from '../../actions'

import style from './About.scss'

function About ({ counter, dispatch }) {
  return (
    <div className={style.about}>
      <h2>About {counter}</h2>
      <h1>Home</h1>
      <FlatButton label="INC" onClick={() => dispatch(increaseCounter())} />
      <FlatButton label="DEC" onClick={() => dispatch(decreaseCounter())} />
      <FlatButton label="ASYNC INC" onClick={() => dispatch(asyncDoubleIncrease())} />
    </div>
  )
}

About.propTypes = {
  counter: PropTypes.number
}

function select (state) {
  return {
    counter: state.app.counter
  }
}

export default connect(select)(About)
