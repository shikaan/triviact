import React from 'react';
import { connect } from 'react-redux';
import AnswerQuestion from '../components/AnswerQuestion';
import { addCorrectAnswer, setActiveAnswer, setActiveQuiz, setConfirm } from '../store/actions';

class AnswerQuestionContainer extends React.Component {
  componentWillMount() {
    this.props.setActiveQuiz(1);
  }

  next() {
    const {
      setActiveQuiz,
      activeQuiz,
      quizzes,
      history,
    } = this.props;

    if (activeQuiz.index === quizzes.length) {
      history.push('/results');
    } else {
      setActiveQuiz(activeQuiz.index + 1);
    }
  }

  confirm() {
    const {
      activeAnswer,
      addCorrectAnswer,
      setConfirm,
    } = this.props;

    if (activeAnswer.correct) addCorrectAnswer();
    setConfirm(true);
  }

  render() {
    return <AnswerQuestion {...this.props} next={() => this.next()} confirm={() => this.confirm()} />;
  }
}

function mapStateToProps({ quizzes, activeAnswer, activeQuiz, confirmed }) {
  return {
    quizzes,
    activeAnswer,
    activeQuiz,
    confirmed,
  };
}

const mapDispatchToProps = { addCorrectAnswer, setActiveQuiz, setActiveAnswer, setConfirm };

export default connect(mapStateToProps, mapDispatchToProps)(AnswerQuestionContainer);