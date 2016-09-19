import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import Paper from 'material-ui/Paper'
import CircularProgress from 'material-ui/CircularProgress'

import Navbar from './Navbar/Navbar'
import Menu from './Menu/Menu'

import style from './Home.scss'

class Home extends Component {
  render () {
    const { children, isFetching } = this.props
    return (
      <div>
        <Navbar />
        <Menu />
        <Paper className={style.appBody} zDepth={1}>
          {
            isFetching
              ? <CircularProgress className={style.loading} />
              : children
          }
        </Paper>
      </div>
    )
  }
}

Home.propTypes = {
  children: PropTypes.node,
  isFetching: PropTypes.bool
}

function select (state) {
  return {
    isFetching: state.app.isFetching
  }
}

export default connect(select)(Home)
