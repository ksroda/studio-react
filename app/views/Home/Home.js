import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import FlatButton from 'material-ui/FlatButton'

import Navbar from './Navbar/Navbar'
import Menu from './Menu/Menu'

import { increaseCounter, decreaseCounter, asyncDoubleIncrease } from '../../actions'

function Home ({ children, dispatch }) {
  return (
    <div>
      <Navbar />
      <Menu />
      <h1>Home</h1>
      <FlatButton label="INC" onClick={() => dispatch(increaseCounter())} />
      <FlatButton label="DEC" onClick={() => dispatch(decreaseCounter())} />
      <FlatButton label="ASYNC INC" onClick={() => dispatch(asyncDoubleIncrease())} />
      {children}
    </div>
  )
}

Home.propTypes = {
  children: PropTypes.node,
  dispatch: PropTypes.func
}

export default connect()(Home)
