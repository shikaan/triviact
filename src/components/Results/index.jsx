import React from 'react';

import Button from '../Shared/Button';

export default (props) => {
  const {
    correctAnswers,
    quizzes,
    navigateTo,
  } = props;

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
          {correctAnswers}/{quizzes ? quizzes.length : 0}
        </h1>
      </main>
      <footer>
        <Button label="Restart" callback={() => navigateTo('/')} />
      </footer>
    </section>
  );
};
