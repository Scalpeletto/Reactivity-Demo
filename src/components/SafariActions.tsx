import React from 'react';

import { Flex, Title } from '@mantine/core';

import SafariPlayToggle from './SafariPlayToggle';
import SafariAddAnimal from './SafariAddAnimal';

function SafariActions() {
  return (
    <Flex
      style={{
        backgroundColor: 'white',
        marginTop: '1em',
        padding: '1em',
      }}
      gap="sm"
      direction="column"
    >
      <Title order={5}>Actions</Title>
      <SafariPlayToggle />
      <SafariAddAnimal />
    </Flex>
  );
}

export default SafariActions;
