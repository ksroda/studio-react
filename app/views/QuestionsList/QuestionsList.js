import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'

import RaisedButton from 'material-ui/RaisedButton'

function QuestionsList ({ children }) {
  return (
    <div>
      <RaisedButton style={{ float: 'right' }} label="Dodaj pytanie" primary />
      {children}
    </div>
  )
}

QuestionsList.propTypes = {
  dispatch: PropTypes.func,
  children: PropTypes.node
}



export default connect()(QuestionsList)
