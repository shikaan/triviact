import React from 'react';

import './Results.scss';

import Logger from '../../logger';
import Button from '../Shared/Button.jsx';

export default class FetchQuestions extends React.Component {
  constructor(props) {
    super(props);
    Logger.debug('Results Props: ', props);

    this.callback = this.callback.bind(this);
  }

  callback() {
    this.props.history.push('/');
  }
  render() {
    return (
      <section className="results">
        <header className="results__header">
          <h1>
            Finished
          </h1>
        </header>
        <main className="results__body">
          <p>
            You answered correctly
          </p>
          <h1>
            {this.props.correctAnswers}/{this.props.total}
          </h1>
        </main>
        <footer>
          <Button label="Restart" callback={this.callback} />
        </footer>
      </section>
    );
  }
}
