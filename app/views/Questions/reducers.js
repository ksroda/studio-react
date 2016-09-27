import { SET_ALL_QUESTIONS, SET_FETCHING_ALL, SET_SUBJECTS } from './actions'

const allInitialState = {
  isFetching: false,
  data: []
}

export function all (state = allInitialState, action) {
  switch (action.type) {
    case SET_ALL_QUESTIONS:
      return {
        ...state,
        data: action.payload.allQuestions
      }
    case SET_FETCHING_ALL:
      return {
        ...state,
        isFetching: action.payload.isFetching
      }
    default:
      return state
  }
}

const subjectsInitialState = {
  data: []
}

export function subjects (state = subjectsInitialState, action) {
  switch (action.type) {
    case SET_SUBJECTS:
      return {
        ...state,
        data: action.payload.subjects
      }
    default:
      return state
  }
}
