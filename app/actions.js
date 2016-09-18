import Promise from 'bluebird'

import API from './api'
import { browserHistory } from 'react-router'

export const INC_COUNTER = 'INC_COUNTER'
export const DEC_COUNTER = 'DEC_COUNTER'
export const IS_FETCHING = 'IS_FETCHING'
export const SET_ALL_QUESTIONS = 'SET_ALL_QUESTIONS'

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

export function setFetching (isFetching) {
  return {
    type: IS_FETCHING,
    payload: {
      isFetching
    }
  }
}

export function setAllQuestions (allQuestions) {
  return {
    type: SET_ALL_QUESTIONS,
    payload: {
      allQuestions
    }
  }
}

export function login () {
  return dispatch => {
    API.login.post({ username: 'admin', password: 'Admin123!@#', 'grant_type': 'password' })
      .then(response => {
        localStorage.setItem('token', response.data.access_token)
        browserHistory.push('/home')
      })
  }
}

export function getAllQuestions () {
  return dispatch => {
    API.questions.getAllQuestions()
      .then(response => {
        dispatch(setAllQuestions(response.data))
      })
  }
}


