import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import recycleState from 'redux-recycle'

import { all, subjects } from './views/Questions/reducers'
import {
  INC_COUNTER,
  DEC_COUNTER,
  OPEN_SNACKBAR,
  CLOSE_SNACKBAR,
  LOGOUT,
  LOGGING_IN,
  SET_PROFILE
} from './actions'

const initialState = {
  counter: 0,
  snackbar: {
    open: false
  },
  loggingIn: false,
  profile: {}
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
    case LOGGING_IN:
      return {
        ...state,
        loggingIn: action.payload.loggingIn
      }
    case SET_PROFILE:
      return {
        ...state,
        profile: action.payload.profile
      }
    default:
      return state
  }
}

const reducers = {
  app: recycleState(app, [LOGOUT]),
  questions: combineReducers({
    all: recycleState(all, [LOGOUT]),
    subjects: recycleState(subjects, [LOGOUT]),
  }),
  form: recycleState(formReducer, [LOGOUT])
}

export default combineReducers(reducers)
