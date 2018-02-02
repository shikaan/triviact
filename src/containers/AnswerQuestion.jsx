import React from 'react';
import { connect } from 'react-redux';
import AnswerQuestion from '../components/AnswerQuestion';
import {
  addCorrectAnswer,
  navigateTo,
  setActiveAnswer,
  setActiveQuiz,
  setConfirm,
} from '../store/actions';

class AnswerQuestionContainer extends React.Component {
  componentWillMount() {
    this.props.setActiveQuiz(1);
  }

  next() {
    if (this.props.activeQuiz.index === this.props.quizzes.length) {
      this.props.navigateTo('/results');
    } else {
      this.props.setActiveQuiz(this.props.activeQuiz.index + 1);
    }
  }

  confirm() {
    if (this.props.activeAnswer.correct) this.props.addCorrectAnswer();
    this.props.setConfirm(true);
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

const mapDispatchToProps = {
  addCorrectAnswer,
  setActiveQuiz,
  setActiveAnswer,
  setConfirm,
  navigateTo,
};

export default connect(mapStateToProps, mapDispatchToProps)(AnswerQuestionContainer);
