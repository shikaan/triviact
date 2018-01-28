import React from 'react';
import { connect } from 'react-redux';
import Results from '../components/Results';
import { navigateTo } from '../store/actions';

const ResultsContainer = props => <Results {...props} />;

function mapStateToProps({ correctAnswers, quizzes }) {
  return {
    correctAnswers,
    quizzes,
  };
}

export default connect(mapStateToProps, { navigateTo })(ResultsContainer);
