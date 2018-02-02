import React from 'react';
import classname from 'classname';
import { Container, Grid, Header, Icon, List } from 'semantic-ui-react';

import Button from '../Shared/Button';
import Radio from '../Shared/Radio';
import './AnswerQuestion.scss';
import FourOhFour from '../../containers/FourOhFour';

export default class AnswerQuestion extends React.Component {
  renderOptions() {
    const { activeQuiz, activeAnswer, setActiveAnswer, confirmed } = this.props;

    return activeQuiz.answers.map((answer) => {
      const className = classname('answer', {
        'answer--correct': confirmed && answer.correct,
        'answer--wrong': confirmed && !answer.correct,
      });

      return (<List.Item key={answer.index}>
        <List.Content className={className}>
          <Radio
            name={`quiz${activeQuiz.index}`}
            checked={!!activeAnswer && activeAnswer.index === answer.index}
            onChange={() => setActiveAnswer(answer.index)}
            readOnly={confirmed}
            value={answer.index}
            label={answer.text}
          />
        </List.Content>
      </List.Item>
      );
    });
  }
  render() {
    const {
      activeAnswer,
      activeQuiz,
      confirmed,
      next,
      confirm,
    } = this.props;

    if (!activeQuiz) {
      return <FourOhFour />;
    }

    const isCorrect = confirmed && activeAnswer && activeAnswer.correct;
    const isWrong = confirmed && activeAnswer && !activeAnswer.correct;

    const color = isCorrect ? 'green' : isWrong ? 'red' : null;

    return (
      <div>
        <Grid celled="internally">
          <Grid.Row>
            <Grid.Column width={16}>
              <Header as="h2" textAlign="center" color={color}>
                <Icon name={(isCorrect && 'checkmark') || (isWrong && 'remove') || 'help'} color={color} />
                <Header.Content>
                  Question #{activeQuiz.index}
                  <Header.Subheader>
                    {activeQuiz.question}
                  </Header.Subheader>
                </Header.Content>
              </Header>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={16}>
              <List>
                { activeQuiz ? this.renderOptions() : 'Nothing to render'}
              </List>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={16}>
              <Container>
                <Button
                  disabled={activeAnswer === null}
                  label={confirmed ? 'Next' : 'Confirm'}
                  callback={confirmed ? next : confirm}
                />
              </Container>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
