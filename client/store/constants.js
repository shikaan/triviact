const ACTIONS = {
  FETCH_QUIZZES: 'FETCH_QUIZZES',
  FETCH_QUIZZES_SUCCESS: 'FETCH_QUIZZES_SUCCESS',
  FETCH_QUIZZES_ERROR: 'FETCH_QUIZZES_ERROR',
  ADD_CORRECT_ANSWER: 'ADD_CORRECT_ANSWER',
  SET_DIFFICULTY: 'SET_DIFFICULTY',
  SET_ACTIVE_QUIZ: 'SET_ACTIVE_QUIZ',
  SET_ACTIVE_ANSWER: 'SET_ACTIVE_ANSWER',
  SET_CONFIRM: 'SET_CONFIRM',
};

const INITIAL_STATE = {
  quizzes: [],
  correctAnswers: 0,
  activeAnswer: null,
  activeQuiz: null,
  error: null,
  isLoading: false,
  difficulty: 'easy',
  confirmed: false
};

export { ACTIONS, INITIAL_STATE };
