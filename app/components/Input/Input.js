import React, { PropTypes, Component } from 'react'

import TextField from 'material-ui/TextField'
import Checkbox from 'material-ui/Checkbox'

export const inputTypes = {
  TextField: 'TextField',
  Checkbox: 'Checkbox'
}

function InputByType ({ inputType, ...rest }) {
  switch (inputType) {
    default:
    case inputTypes.TextField:
      return <TextField {...rest} />
    case inputTypes.Checkbox:
      return <Checkbox {...rest} />
  }
}

InputByType.propTypes = {
  inputType: PropTypes.string
}

class Input extends Component {
  render () {
    const { input, meta: { error, touched }, inputType, ...rest } = this.props
    const errorText = touched ? error : ''
    return React.cloneElement(<InputByType inputType={inputType} />, {
      ...input,
      errorText,
      ...rest,
      inputType
    })
  }
}

Input.propTypes = {
  input: PropTypes.object,
  meta: PropTypes.object,
  inputType: PropTypes.string
}

export default Input
