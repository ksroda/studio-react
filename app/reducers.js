import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import { all } from './views/QuestionsList/reducers'
import { INC_COUNTER, DEC_COUNTER } from './actions'

const appInitialState = {
  counter: 0
}

function app (state = appInitialState, action) {
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
  questions: combineReducers({
    all
  }),
  form: formReducer
}

export default combineReducers(reducers)
