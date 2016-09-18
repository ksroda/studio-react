import Promise from 'bluebird'

export const INC_COUNTER = 'INC_COUNTER'
export const DEC_COUNTER = 'DEC_COUNTER'

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
