import 'semantic-ui-css/semantic.min.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Redirect, Route, Router, Switch } from 'react-router-dom';

import store, { history } from './store';
import Results from './containers/Results';
import AnswerQuestion from './containers/AnswerQuestion';
import FetchQuizzes from './containers/FetchQuizzes';
import FourOhFour from './components/FourOhFour';

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route path="/home" component={FetchQuizzes} />
        <Route path="/quiz" component={AnswerQuestion} />
        <Route path="/results" component={Results} />
        <Route component={FourOhFour} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
