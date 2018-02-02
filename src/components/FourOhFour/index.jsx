import React from 'react';
import { Container, Grid, Header } from 'semantic-ui-react';
import Button from '../Shared/Button';

const FourOhFour = ({ navigateTo }) =>
  (<Grid celled="internally" textAlign="center">
    <Grid.Row>
      <Grid.Column width={16}>
        <Header as="h2" textAlign="center">
          Whooooops!
        </Header>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column width={16}>
        Unfortunately something went wrong!
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column width={16}>
        <Container>
          <Button
            label="Go Home"
            callback={() => { navigateTo('/home'); }}
          />
        </Container>
      </Grid.Column>
    </Grid.Row>
  </Grid>);

export default FourOhFour;
