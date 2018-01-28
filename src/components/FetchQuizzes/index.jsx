import React from 'react';
import './FetchQuizzes.scss';

import Button from '../Shared/Button';
import Select from '../Shared/Select';

export default (props) => {
  const {
    setDifficulty,
    isLoading,
    difficulty,
    fetchQuizzes,
  } = props;

  return (
    <section className="fetch-quizzes">
      <header className="fetch-quizzes__header">
        <h1>Fetch questions</h1>
        <h3>subtitle</h3>
      </header>
      <main className="fetch-quizzes__body">
        <Select callback={e => setDifficulty(e.target.value)} label="Level">
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </Select>
      </main>
      <footer>
        <Button
          label="fetch"
          callback={() => fetchQuizzes(difficulty)}
          loading={isLoading}
        />
      </footer>
    </section>
  );
};
