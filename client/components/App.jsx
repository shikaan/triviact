import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { history } from '../store';

import FetchQuizzes from '../containers/FetchQuizzes';
import AnswerQuestion from '../containers/AnswerQuestion';
import './App.scss';

export default class App extends React.Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={FetchQuizzes} />
          <Route path="/quiz" component={AnswerQuestion} />
          {/* <Route path="/results" render={props => <Results {...props} correctAnswers={this.state.correctAnswers} total={this.state.quizzes.length} />} /> */}
          <Route path="*" component={FetchQuizzes} />
        </Switch>
      </Router>
    );
  }
}
