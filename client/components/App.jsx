import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import FetchQuizzes from '../containers/FetchQuizzes';
import AnswerQuestion from './AnswerQuestion';
import Results from './Results';
import { Configuration } from '../configuration';
import Logger from '../logger';
import { LOG_LEVELS_BY_KEY } from '../constants';
import './App.scss';

let self;

export default class App extends React.Component {
  componentWillMount() {
    Logger.info('App started with log level', LOG_LEVELS_BY_KEY[Configuration.logLevel]);
    this.setState({
      quizzes: [],
      correctAnswers: 0,
    });
  }

  setCorrectAnswers(correctAnswers) {
    Logger.info('Setting Correct Answer Number', correctAnswers);
    self.setState({
      correctAnswers,
    });
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={FetchQuizzes} />
          {/* <Route path="/quiz" render={props => <AnswerQuestion {...props} quizzes={this.state.quizzes} setCorrectAnswers={this.setCorrectAnswers} />} /> */}
          {/* <Route path="/results" render={props => <Results {...props} correctAnswers={this.state.correctAnswers} total={this.state.quizzes.length} />} /> */}
        </div>
      </BrowserRouter>
    );
  }
}
