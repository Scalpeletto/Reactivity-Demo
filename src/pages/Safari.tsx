import React from 'react';
import { observer } from 'mobx-react-lite';
import {
  Container, Title, Center,
} from '@mantine/core';

import routes from '@/constants/routes';

import NavigationButton from '@/components/NavigationButton';
import SafariStats from '@/components/SafariStats';
import SafariActions from '@/components/SafariActions';
import SafariAnimalList from '@/components/SafariAnimalList';

const SafariPage = observer(() => (
  <Container
    fluid
    style={{
      minHeight: '100vh',
      backgroundColor: 'whitesmoke',
      padding: '1em',
    }}
  >
    <NavigationButton size="compact-xs" route={routes.home} text="Back" />
    <Center>
      <Title order={2}>Safari</Title>
    </Center>
    <SafariActions />
    <SafariStats />
    <SafariAnimalList />
  </Container>
));

export default SafariPage;
