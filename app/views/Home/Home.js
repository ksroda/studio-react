import React, { Component, PropTypes } from 'react'

import Paper from 'material-ui/Paper'

import Navbar from './Navbar/Navbar'
import Menu from './Menu/Menu'

import style from './Home.scss'

class Home extends Component {
  render () {
    const { children } = this.props
    return (
      <div>
        <Navbar />
        <Menu />
        <Paper className={style.appBody} zDepth={1}>
          {children}
        </Paper>
      </div>
    )
  }
}

Home.propTypes = {
  children: PropTypes.node
}

export default Home
