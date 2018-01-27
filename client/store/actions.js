import { Configuration } from '../configuration';
import { ACTIONS } from './constants';

const apiUrl = Configuration.apiUrl;

function fetchQuizzesError(payload) {
  return {
    type: ACTIONS.FETCH_QUIZZES_ERROR,
    payload,
  };
}

function fetchQuizzesSuccess(payload) {
  return {
    type: ACTIONS.FETCH_QUIZZES_SUCCESS,
    payload,
  };
}

function fetchQuizzes(difficulty) {
  const request = fetch(`${apiUrl}?amount=10&difficulty=${difficulty}`);

  return (dispatch) => {
    request
      .then((response) => {
        const data = response.json();
        return response.ok
          ? dispatch(fetchQuizzesSuccess(data))
          : dispatch(fetchQuizzesError(data));
      })
      .catch(error => dispatch(fetchQuizzesError(error)));
  };
}

function setCorrectAnswers(correctAnswers) {
  return {
    type: ACTIONS.SET_CORRECT_ANSWERS,
    payload: correctAnswers,
  };
}

function setDifficulty(value) {
  return {
    type: ACTIONS.SET_DIFFICULTY,
    payload: value,
  };
}

export {
  fetchQuizzes,
  setCorrectAnswers,
  setDifficulty,
};
