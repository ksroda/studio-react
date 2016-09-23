import React, { Component, PropTypes } from 'react'

import Paper from 'material-ui/Paper'

import Navbar from './Navbar/Navbar'
import Menu from './Menu/Menu'
import Breadcrumbs from './Breadcrumbs/Breadcrumbs'

import style from './Home.scss'

class Home extends Component {
  render () {
    const { children, allowedToSeeContent, location: { pathname: path } } = this.props
    return allowedToSeeContent
      ?
        <div>
          <Navbar />
          <Menu />
          <Breadcrumbs path={path} />
          <Paper className={style.appBody} zDepth={1}>
            {children}
          </Paper>
        </div>
      : null
  }
}

Home.propTypes = {
  children: PropTypes.node,
  allowedToSeeContent: PropTypes.bool
}

export default Home
