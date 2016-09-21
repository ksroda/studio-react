import React from 'react'
import ReactDOM from 'react-dom'
import { IndexRoute, Router, Route, Redirect, browserHistory } from 'react-router'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'
import injectTapEventPlugin from 'react-tap-event-plugin'

import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

import Auth from '~/Auth'
import Home from '~/views/Home/Home'
import Login from '~/views/Login/Login'
import About from '~/views/About/About'
import QuestionsList from '~/views/QuestionsList/QuestionsList'
import QuestionsAll from '~/views/QuestionsList/QuestionsAll/QuestionsAll'
import QuestionsCreate from '~/views/QuestionCreate/QuestionCreate'

import reducer from '~/reducers'

// import { wrzosowy } from '../shared/colors'

import { deepPurple400 } from 'material-ui/styles/colors'

injectTapEventPlugin()
const logger = createLogger({
  collapsed: true,
  duration: true
})

const store = createStore(reducer, applyMiddleware(thunk, logger))

const theme = getMuiTheme({
  ...lightBaseTheme,
  palette: {
    ...lightBaseTheme.palette,
    primary1Color: deepPurple400
  }
})

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={theme}>
      <Router history={browserHistory}>
        <Route path="/" component={Auth}>
          <Route path="login" component={Login} />

          <Redirect from="home" to="home/questions/all" />
          <Route path="home" component={Home}>
            <IndexRoute component={About} />

            <Redirect from="questions" to="questions/all" />
            <Route path="questions" component={QuestionsList}>
              <Route path="all" component={QuestionsAll} />
            </Route>
            <Route path="questions/create" component={QuestionsCreate} />
            <Route path="questions/edit/:id" component={QuestionsCreate} />

          </Route>

          <Redirect from="*" to="home/questions/all" />
        </Route>
      </Router>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
)
