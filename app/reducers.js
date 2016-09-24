import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import { all } from './views/QuestionsList/reducers'
import { INC_COUNTER, DEC_COUNTER, OPEN_SNACKBAR, CLOSE_SNACKBAR } from './actions'

const initialState = {
  counter: 0,
  snackbar: {
    open: false
  }
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
    case OPEN_SNACKBAR:
      return {
        ...state,
        snackbar: {
          open: true,
          ...action.payload
        }
      }
    case CLOSE_SNACKBAR:
      return {
        ...state,
        snackbar: {
          ...state.snackbar,
          open: false
        }
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
