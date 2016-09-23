import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import RaisedButton from 'material-ui/RaisedButton'

function QuestionsList ({ children }) {
  return (
    <div>
      {children}
    </div>
  )
}

QuestionsList.propTypes = {
  dispatch: PropTypes.func,
  children: PropTypes.node
}

export default connect()(QuestionsList)
