import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Redirect, browserHistory } from 'react-router'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'

import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

import Auth from './Auth'
import Home from './views/Home/Home'
import Login from './views/Login/Login'
import About from './views/About/About'
import QuestionsList from './views/QuestionsList/QuestionsList'
import QuestionsAll from './views/QuestionsList/QuestionsAll/QuestionsAll'
import QuestionsCreate from './views/QuestionCreate/QuestionCreate'
import UsersList from './views/Administration/Users/UsersList/UsersList'

import { granacik } from './shared/colors'
import reducer from './reducers'

// injectTapEventPlugin()
const logger = createLogger({
  collapsed: true,
  duration: true
})

const store = createStore(reducer, applyMiddleware(thunk, logger))

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
          </Route>

          <Redirect from="*" to="home/questions/all" />
        </Route>
      </Router>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
)


module.hot.accept()
