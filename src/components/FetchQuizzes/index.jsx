import React from 'react';
import { Container, Grid, Header, Icon } from 'semantic-ui-react';

import Button from '../Shared/Button';
import Select from '../Shared/Select';

export default (props) => {
  const {
    setDifficulty,
    isLoading,
    difficulty,
    fetchQuizzes,
  } = props;

  return (
    <div>
      <Grid celled="internally">
        <Grid.Row>
          <Grid.Column width={16}>
            <Header as="h1" textAlign="center">
              <Icon name="configure" circular />
              <Header.Content>
              Fetch quizzes
                <Header.Subheader>
                Tweak the parameters to start playing!
                </Header.Subheader>
              </Header.Content>
            </Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={16}>
            <Select
              callback={(e, { value }) => setDifficulty(value)}
              label="Level"
              options={[
                { text: 'Easy', value: 'easy' },
                { text: 'Medium', value: 'medium' },
                { text: 'Hard', value: 'hard' },
              ]}
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={16}>
            <Container>
              <Button
                label="Start"
                callback={() => fetchQuizzes(difficulty)}
                loading={isLoading}
              />
            </Container>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};
