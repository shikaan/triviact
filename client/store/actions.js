import { push } from 'react-router-redux';
import { ACTIONS } from './constants';
import { Configuration } from '../configuration';

const apiUrl = Configuration.apiUrl;

function navigateTo(path) {
  return (dispatch) => {
    dispatch(push(path));
  };
}

function fetchQuizzesError(payload) {
  return {
    type: ACTIONS.FETCH_QUIZZES_ERROR,
    payload,
  };
}

function fetchQuizzesSuccess(payload) {
  return (dispatch) => {
    dispatch({
      type: ACTIONS.FETCH_QUIZZES_SUCCESS,
      payload,
    }).then(() => {
      dispatch(navigateTo('/quiz'));
    });
  };
}

function fetchQuizzes(difficulty) {
  const request = fetch(`${apiUrl}?amount=10&difficulty=${difficulty}`);

  return (dispatch) => {
    dispatch({
      type: ACTIONS.FETCH_QUIZZES,
    });

    return request.then((response) => {
      const data = response.json();
      return response.ok
        ? dispatch(fetchQuizzesSuccess(data))
        : dispatch(fetchQuizzesError(data));
    })
      .catch(error => dispatch(fetchQuizzesError(error)));
  };
}

function setActiveQuiz(index) {
  return {
    type: ACTIONS.SET_ACTIVE_QUIZ,
    payload: index,
  };
}

function addCorrectAnswer() {
  return {
    type: ACTIONS.ADD_CORRECT_ANSWER,
  };
}

function setDifficulty(value) {
  return {
    type: ACTIONS.SET_DIFFICULTY,
    payload: value,
  };
}

function setActiveAnswer(index) {
  return {
    type: ACTIONS.SET_ACTIVE_ANSWER,
    payload: index,
  };
}

function setConfirm(value) {
  return {
    type: ACTIONS.SET_CONFIRM,
    payload: value,
  };
}

export {
  fetchQuizzes,
  addCorrectAnswer,
  setDifficulty,
  setActiveQuiz,
  setConfirm,
  setActiveAnswer,
  navigateTo,
};
