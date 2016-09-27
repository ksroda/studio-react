import Promise from 'bluebird'
import { browserHistory } from 'react-router'

import API from './api'
import { snackbarTypes } from './components/Snackbar/Snackbar'

export const INC_COUNTER = 'INC_COUNTER'
export const DEC_COUNTER = 'DEC_COUNTER'
export const OPEN_SNACKBAR = 'OPEN_SNACKBAR'
export const CLOSE_SNACKBAR = 'CLOSE_SNACKBAR'
export const LOGOUT = 'LOGOUT'
export const LOGGING_IN = 'LOGGING_IN'
export const SET_PROFILE = 'SET_PROFILE'

// --------------------------------Profile--------------------------------------

export function setProfile (profile) {
  return {
    type: SET_PROFILE,
    payload: {
      profile
    }
  }
}

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

// ------------------------------Logout/Login-----------------------------------

export function setLoggingIn (loggingIn) {
  return {
    type: LOGGING_IN,
    payload: {
      loggingIn
    }
  }
}

export function login ({ username, password, setAllowedToSeeContent }) {
  return (dispatch) => {
    dispatch(setLoggingIn(true))
    API.login.post({ username, password, grant_type: 'password' })
      .then((response) => {
        setAllowedToSeeContent(true)
        sessionStorage.setItem('token', response.data.access_token)
        browserHistory.push('/home')
        dispatch(setLoggingIn(false))
      })
      .catch((error) => {
        dispatch(openSnackbar({ message: 'Nieprawidłowe dane logowania #dalibomba', type: snackbarTypes.ERROR }))
        dispatch(setLoggingIn(false))
      })
  }
}

export function logout () {
  return (dispatch) => {
    sessionStorage.clear()
    browserHistory.push('/login')
    dispatch({
      type: LOGOUT
    })
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
