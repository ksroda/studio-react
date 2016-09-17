import { INC_COUNTER, DEC_COUNTER } from './actions'
import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

const initialState = {
  counter: 0
}

function app (state = initialState, action) {
  switch (action.type) {
    case INC_COUNTER:
      return {
        ...state,
        counter: state.counter + 1
      }
    case DEC_COUNTER:
      return {
        ...state,
        counter: state.counter - 1
      }
    default:
      return state
  }
}

const reducers = {
  app,
  form: formReducer
}

export const reducer = combineReducers(reducers)
