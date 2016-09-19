import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import { INC_COUNTER, DEC_COUNTER, IS_FETCHING, SET_ALL_QUESTIONS } from './actions'

const appInitialState = {
  counter: 0,
  isFetching: false
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
    case IS_FETCHING:
      return {
        ...state,
        isFetching: action.payload.isFetching
      }
    default:
      return state
  }
}

const questionsInitialState = {
}

function questions (state = questionsInitialState, action) {
  switch (action.type) {
    case SET_ALL_QUESTIONS:
      return {
        ...state,
        all: action.payload.allQuestions
      }
    default:
      return state
  }
}

const reducers = {
  app,
  questions,
  form: formReducer
}

export default combineReducers(reducers)
