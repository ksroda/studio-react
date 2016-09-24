import Promise from 'bluebird'

export const INC_COUNTER = 'INC_COUNTER'
export const DEC_COUNTER = 'DEC_COUNTER'
export const OPEN_SNACKBAR = 'OPEN_SNACKBAR'
export const CLOSE_SNACKBAR = 'CLOSE_SNACKBAR'


// --------------------------------Snackbar-------------------------------------

export function openSnackbar (params) {
  return {
    type: OPEN_SNACKBAR,
    payload: {
      ...params
    }
  }
}

export function closeSnackbar () {
  return {
    type: CLOSE_SNACKBAR
  }
}

// ---------------------------------Counter-------------------------------------

export function increaseCounter () {
  return {
    type: INC_COUNTER
  }
}

export function decreaseCounter () {
  return {
    type: DEC_COUNTER
  }
}

export function asyncDoubleIncrease () {
  return (dispatch) => {
    dispatch(increaseCounter())
    Promise.delay(2000)
      .then(() => dispatch(increaseCounter()))
  }
}
