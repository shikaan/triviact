import React from 'react';
import { Container, Grid, Header, Progress } from 'semantic-ui-react';

import Button from '../Shared/Button';

export default (props) => {
  const {
    correctAnswers,
    quizzes,
    navigateTo,
  } = props;

  return (
    <Grid celled="internally" textAlign="center">
      <Grid.Row>
        <Grid.Column width={16}>
          <Header as="h2" textAlign="center">
            Finished
          </Header>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={16}>
          You answered correctly
          <Progress value={correctAnswers} total={quizzes.length} progress="ratio" />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={16}>
          <Container>
            <Button label="Restart" callback={() => navigateTo('/home')} />
          </Container>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};
