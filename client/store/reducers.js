import * as he from 'he';
import { ACTIONS, INITIAL_STATE } from './constants';

const parseQuiz = (quiz = {}, index) => {
  const parsedQuiz = {
    answers: [],
    question: null,
    index: index + 1,
  };

  const rawIncorrectAnswers = quiz.incorrect_answers;
  parsedQuiz.question = he.decode(quiz.question);

  if (Array.isArray(rawIncorrectAnswers)) {
    parsedQuiz.answers =
      rawIncorrectAnswers.map((answer, idx) => ({
        text: he.decode(answer),
        correct: false,
        index: idx,
      }),
      );
  }

  parsedQuiz.answers.push({
    text: he.decode(quiz.correct_answer),
    correct: true,
    index: rawIncorrectAnswers.length,
  });

  return parsedQuiz;
};


export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTIONS.FETCH_QUIZZES:
      return Object.assign({}, state, { isLoading: true });
    case ACTIONS.FETCH_QUIZZES_ERROR:
      return Object.assign({}, state, { error: action.payload, isLoading: false });
    case ACTIONS.FETCH_QUIZZES_SUCCESS:
      return Object.assign({}, state, {
        quizzes: action.payload.results.map(parseQuiz),
        isLoading: false,
      });
    case ACTIONS.SET_DIFFICULTY:
      return Object.assign({}, state, { difficulty: action.payload });
    case ACTIONS.SET_ACTIVE_ANSWER:
      return Object.assign({}, state, { activeAnswer: state.activeQuiz.answers[action.payload] });
    case ACTIONS.ADD_CORRECT_ANSWER:
      return Object.assign({}, state, {
        correctAnswers: state.correctAnswers + 1,
      });
    case ACTIONS.SET_ACTIVE_QUIZ:
      return Object.assign({}, state, {
        activeQuiz: state.quizzes[action.payload - 1],
        confirmed: false,
        activeAnswer: null
      });
    case ACTIONS.SET_CONFIRM:
      return Object.assign({}, state, { confirmed: action.payload });
    default:
      return state;
  }
};
