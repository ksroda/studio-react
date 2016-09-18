import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import style from './About.scss'

class About extends Component {
  render () {
    const { counter } = this.props
    return (
      <div className={style.about}>
        <h2>About {counter}</h2>
      </div>
    )
  }
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
