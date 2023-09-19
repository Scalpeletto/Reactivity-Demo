import React from 'react';
import { observer } from 'mobx-react-lite';

import { Container } from '@mantine/core';

import routes from '@/constants/routes';
import NavigationButton from '@/components/NavigationButton';

const HomePage = observer(() => (
  <Container
    fluid
    style={{
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'whitesmoke',
      padding: '1em',
    }}
  >
    <NavigationButton route={routes.safari} text="Play SAFARI" />
  </Container>
));

export default HomePage;
