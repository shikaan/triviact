import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { history } from '../store';

import FetchQuizzes from '../containers/FetchQuizzes';
import AnswerQuestion from '../containers/AnswerQuestion';
import Results from '../containers/Results';
import './App.scss';

export default () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={FetchQuizzes} />
      <Route path="/quiz" component={AnswerQuestion} />
      <Route path="/results" component={Results} />
    </Switch>
  </Router>
);
