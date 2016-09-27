import Promise from 'bluebird'

import { snackbarTypes } from '../../components/Snackbar/Snackbar'
import { openSnackbar } from '../../actions'
import API from '../../api'

export const SET_ALL_QUESTIONS = 'SET_ALL_QUESTIONS'
export const SET_FETCHING_ALL = 'SET_FETCHING_ALL'
export const SET_SUBJECTS = 'SET_SUBJECTS'


// ---------------------------Subjects-----------------------------------

export function setSubjects (subjects) {
  return {
    type: SET_SUBJECTS,
    payload: {
      subjects
    }
  }
}

export function getSubjects () {
  return (dispatch) => {
    API.subjects.get()
      .then((response) => {
        dispatch(setSubjects(response.data))
      })
      .catch(() => {
        dispatch(openSnackbar({
          message: 'Nie można pobrać przedmiotów',
          type: snackbarTypes.ERROR
        }))
      })
  }
}

// ------------------------------ALL-------------------------------------

export function editQuestion (id, data) {
  return (dispatch) => {
    dispatch(openSnackbar({ message: 'Edytowanie pytania', type: snackbarTypes.LOADING }))
    API.questions.edit(id, data)
      .then(() => {
        dispatch(openSnackbar({ message: 'Pytanie zmienione', type: snackbarTypes.SUCCESS }))
      })
      .catch(() => {
        dispatch(openSnackbar({ message: 'Edytowanie pytania nie powiodło się', type: snackbarTypes.ERROR }))
      })
  }
}

export function setFetchingAll (isFetching) {
  return {
    type: SET_FETCHING_ALL,
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

export function getAllQuestions () {
  return (dispatch) => {
    dispatch(setFetchingAll(true))
    API.questions.getAllQuestions()
      .then((response) => {
        dispatch(setAllQuestions(response.data))
        dispatch(setFetchingAll(false))
      })
      .catch(() => {
        dispatch(setAllQuestions([]))
        dispatch(setFetchingAll(false))
      })
  }
}


// ------------------------------MY-------------------------------------
