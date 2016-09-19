import React, { PropTypes, Component } from 'react'

import TextField from 'material-ui/TextField'

export const inputTypes = {
  TextField: 'TextField'
}

function InputByType ({ inputType, ...rest }) {
  switch (inputType) {
    default:
    case inputTypes.TextField:
      return <TextField {...rest} />
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
