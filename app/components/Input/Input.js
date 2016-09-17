import React, { Component } from 'react'
import { Field } from 'redux-form'

import TextField from 'material-ui/TextField'

function InputByType ({ type, ...rest }) {
  switch (type) {
    default:
    case 'text':
      return <TextField {...rest} />
  }
}

class Input extends Component {
  render () {
    console.log(this.props)
    const { input, meta: { error, touched }, type, ...rest } = this.props
    const errorText = touched ? error : ''
    return React.cloneElement(<TextField />, {
      ...input,
      errorText,
      ...rest,
      type
    })
  }
}

export default Input
