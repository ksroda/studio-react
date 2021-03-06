import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Redirect, browserHistory } from 'react-router'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'
import Promise from 'bluebird'

import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

import Auth from '~/Auth'
import Home from '~/views/Home/Home'
import Login from '~/views/Login/Login'
import About from '~/views/About/About'
import QuestionsList from '~/views/Questions/QuestionsList/QuestionsList'
import QuestionsAll from '~/views/Questions/QuestionsList/QuestionsAll/QuestionsAll'
import QuestionsCreate from '~/views/Questions/QuestionCreate/QuestionCreate'
import UsersList from '~/views/Administration/Users/UsersList/UsersList'
import UserCreate from '~/views/Administration/Users/UserCreate/UserCreate'

import { granacik } from '~/shared/colors'
import reducer from '~/reducers'

const logger = createLogger({
  collapsed: true,
  duration: true
})

const snackbarMiddleware = store => dispatch => (action) => {
  if (action.type === 'OPEN_SNACKBAR') {
    const state = store.getState()
    if (state.app.snackbar.open) {
      Promise.delay(1000).then(() => dispatch(action))
    } else {
      return dispatch(action)
    }
  } else {
    return dispatch(action)
  }
}

const store = createStore(reducer, applyMiddleware(thunk, snackbarMiddleware, logger))

const theme = getMuiTheme({
  ...lightBaseTheme,
  fontFamily: 'Raleway, sans-serif',
  palette: {
    ...lightBaseTheme.palette,
    primary1Color: granacik
  }
})

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={theme}>
      <Router history={browserHistory}>
        <Redirect from="/" to="home/about" />
        <Redirect from="/home" to="home/about" />

        <Route path="/" component={Auth}>
          <Route path="login" component={Login} />
          <Route path="home" component={Home}>

            <Route path="about" component={About} />

            <Redirect from="questions" to="questions/all" />
            <Route path="questions" component={QuestionsList}>
              <Route path="all" component={QuestionsAll} />
            </Route>
            <Route path="questions/create" component={QuestionsCreate} />
            <Route path="questions/edit/:id" component={QuestionsCreate} />

            <Route path="administration/users" component={UsersList} />
            <Route path="administration/users/create" component={UserCreate} />
          </Route>

          <Redirect from="*" to="home/questions/all" />
        </Route>
      </Router>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept()
}