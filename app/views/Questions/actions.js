import Promise from 'bluebird'

import API from '../../api'

export const SET_ALL_QUESTIONS = 'SET_ALL_QUESTIONS'
export const SET_FETCHING_ALL = 'SET_FETCHING_ALL'

// ------------------------------ALL-------------------------------------

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
