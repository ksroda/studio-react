import React, { Component } from 'react'
import { connect } from 'react-redux'

import Navbar from './Navbar/Navbar'
import Menu from './Menu/Menu'

import { increaseCounter, decreaseCounter, asyncDoubleIncrease } from '../../actions'
import FlatButton from 'material-ui/FlatButton'

class Home extends Component {
  render () {
    const { children, dispatch } = this.props
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
}

export default connect()(Home)
