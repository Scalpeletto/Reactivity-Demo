import React from 'react';

import { Flex, Title } from '@mantine/core';

import SafariSeconds from './SafariSeconds';
import SafariAnimalCount from './SafariAnimalCount';
import SafariPoints from './SafariPoints';

function SafariStats() {
  return (
    <Flex
      style={{
        backgroundColor: 'white',
        padding: '1em',
        marginTop: '1em',
      }}
      gap="xs"
      direction="column"
    >
      <Title order={5}>Safari Stats</Title>
      <SafariSeconds />
      <SafariAnimalCount />
      <SafariPoints />
    </Flex>
  );
}

export default SafariStats;
