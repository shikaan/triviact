import { ACTIONS, INITIAL_STATE } from './constants';

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTIONS.FETCH_QUIZZES:
      return Object.assign({}, state, { isLoading: true });
    case ACTIONS.FETCH_QUIZZES_ERROR:
      return Object.assign({}, state, { error: action.payload, isLoading: false });
    case ACTIONS.FETCH_QUIZZES_SUCCESS:
      return Object.assign({}, state, { quizzes: action.payload.results, isLoading: false });
    case ACTIONS.SET_DIFFICULTY:
      return Object.assign({}, state, { difficulty: action.payload });
    default:
      return state;
  }
};
