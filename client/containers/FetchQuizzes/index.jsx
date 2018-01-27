import React from 'react';
import { connect } from 'react-redux';
import { setDifficulty, fetchQuizzes } from '../../store/actions';
import FetchQuizzes from '../../components/FetchQuizzes';

class FetchQuizzesContainer extends React.Component {
  onSubmitHandler() {
    const {
      fetchQuizzes,
      difficulty,
      history,
    } = this.props;
    
    fetchQuizzes(difficulty);
    history.push('/quiz');
  }

  render() {
    return <FetchQuizzes {...this.props} onSubmitHandler={() => this.onSubmitHandler()} />;
  }
}

function mapStateToProps({ isLoading, difficulty }) {
  return {
    isLoading,
    difficulty,
  };
}

export default connect(mapStateToProps, { setDifficulty, fetchQuizzes })(FetchQuizzesContainer);
