import React from 'react';
import { connect } from 'react-redux';
import { setDifficulty, fetchQuizzes } from '../store/actions';
import FetchQuizzes from '../components/FetchQuizzes';

const FetchQuizzesContainer = props => <FetchQuizzes {...props} />;

function mapStateToProps({ isLoading, difficulty }) {
  return {
    isLoading,
    difficulty,
  };
}

export default connect(mapStateToProps, { setDifficulty, fetchQuizzes })(FetchQuizzesContainer);
