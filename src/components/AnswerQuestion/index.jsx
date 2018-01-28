import React from 'react';
import classname from 'classname';

import './AnswerQuestion.scss';

import Button from '../Shared/Button';
import Radio from '../Shared/Radio';

const headerBaseClass = 'answer-questions-header__title';

export default class AnswerQuestion extends React.Component {
  renderOptions() {
    const { activeQuiz, activeAnswer, setActiveAnswer } = this.props;

    return activeQuiz.answers.map(answer =>
      (<div key={answer.index}>
        <Radio
          name={activeQuiz.index}
          checked={!!activeAnswer && activeAnswer.index === answer.index}
          onChange={() => setActiveAnswer(answer.index)}
          value={answer.index}
          label={answer.text}
        />
      </div>));
  }
  render() {
    const {
      activeAnswer,
      activeQuiz,
      confirmed,
      next,
      confirm,
    } = this.props;

    const headerClass = classname(headerBaseClass, {
      [`${headerBaseClass}--correct`]: confirmed && activeAnswer && activeAnswer.correct,
      [`${headerBaseClass}--wrong`]: confirmed && activeAnswer && !activeAnswer.correct,
    });

    if (!activeQuiz) {
      return <h2>Nothing to render</h2>;
    }

    return (
      <section className="answer-questions">
        <header className="answer-questions__header">
          <h1 className={headerClass}>
            Question #{activeQuiz.index}
          </h1>
          <h2 className="answer-questions-header__question">
            {activeQuiz.question}
          </h2>
        </header>
        <main>
          { activeQuiz ? this.renderOptions() : 'Nothing to render'}
        </main>
        <footer className="answer-questions__footer">
          <Button
            disabled={activeAnswer === null}
            label={confirmed ? 'Next' : 'Confirm'}
            callback={confirmed ? next : confirm}
          />
        </footer>
      </section>
    );
  }
}
