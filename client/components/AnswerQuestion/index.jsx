import Logger from '../../logger.js';

import React from 'react';
import './AnswerQuestion.scss';
import Quiz from './Quiz.js';

import Button from '../Shared/Button.jsx';
import Radio from '../Shared/Radio.jsx';

export default class AnswerQuestion extends React.Component {
  constructor(props) {
    super(props);
    Logger.info('Answer Question props', props);
    this.quiz = null;
    this.headerBaseClass = 'answer-questions-header__title';

    this.next = this.next.bind(this);
    this.confirm = this.confirm.bind(this);
    this.selectAnswer = this.selectAnswer.bind(this);
  }

  componentWillMount() {
	    this.setState({
	      currentIndex: 0,
	      selectedAnswer: null,
	      correct: null,
	      headerClass: this.headerBaseClass,
	      correctAnswers: 0,
	    });
  }

  getQuiz(index = 0) {
    const rawQuiz = this.props.quizzes[index];
    const currentQuiz = (new Quiz()).deserialize(rawQuiz);
    Logger.info('Current Quiz', currentQuiz);

    return currentQuiz;
  }

  selectAnswer(index) {
    return () => {
      Logger.debug(`Selected answer #${index + 1}`);
      this.setState({ selectedAnswer: index });
    };
  }

  next() {
    const currentIndex = this.state.currentIndex + 1;
    if (currentIndex < this.props.quizzes.length) {
      this.setState({
        currentIndex,
        selectedAnswer: null,
        correct: null,
      }, () => {
        this.updateHeaderClass();
      });
    } else {
      this.props.history.push('/results');
    }
  }

  confirm() {
    const confirmedAnswer = this.quiz.answers[this.state.selectedAnswer];
    const correct = confirmedAnswer.correct;

    const correctAnswers = correct ? this.state.correctAnswers + 1 : this.state.correctAnswers;

    Logger.info('Confirmed', confirmedAnswer);
    this.setState({
      confirmed: true,
      correct,
      correctAnswers,
    }, () => {
      this.updateHeaderClass();

      if (correct) {
        this.props.setCorrectAnswers(this.state.correctAnswers);
      }
    });
  }

  updateHeaderClass() {
    Logger.info('Updating header class');
    Logger.debug(`Correct: ${this.state.correct}`);

    if (this.state.correct === null) { this.setState({ headerClass: this.headerBaseClass }); } else if (this.state.correct) { this.setState({ headerClass: `${this.headerBaseClass} ${this.headerBaseClass}--correct` }); } else { this.setState({ headerClass: `${this.headerBaseClass} ${this.headerBaseClass}--wrong` }); }
  }

  render() {
    this.quiz = this.getQuiz(this.state.currentIndex);

    return (
      <section className="answer-questions">
        <header className="answer-questions__header">
          <h1 className={this.state.headerClass}>
			  Question #{this.state.currentIndex + 1}
          </h1>
          <h2 className="answer-questions-header__question">
            {this.quiz.question}
          </h2>
        </header>
        <main >
          {this.quiz.answers.map((answer, index) =>
            (<div key={index}>
              <Radio
                name={this.state.currentIndex}
                checked={this.state.selectedAnswer === index}
                onChange={this.selectAnswer(index)}
                value={index}
                label={answer.text}
              />
            </div>),
          )}
        </main>
        <footer className="answer-questions__footer">
          <Button
            disabled={this.state.selectedAnswer === null}
            label={this.state.correct !== null ? 'Next' : 'Confirm'}
            callback={this.state.correct !== null ? this.next : this.confirm}
          />
        </footer>
      </section>
    );
  }
}
