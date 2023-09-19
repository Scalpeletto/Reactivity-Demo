import React from 'react';

import { useStore } from '@/store/setupContext';
import { observer } from 'mobx-react-lite';
import {
  SimpleGrid, Text, Flex, Title,
} from '@mantine/core';

import SafariAnimal from './SafariAnimal';

const SafariAnimalList = observer(() => {
  const store = useStore();
  const { safari } = store;
  const { animals, isSafariEmpty } = safari;

  return (
    <Flex
      style={{
        backgroundColor: 'white',
        marginTop: '1em',
        padding: '1em',
      }}
      direction="column"
      gap="xs"
    >
      <Title order={5}>Safari Animals</Title>
      {isSafariEmpty
        ? <Text>No Animals in Safari</Text>
        : (
          <SimpleGrid cols={5}>
            {animals.map((animal) => (<SafariAnimal key={`${animal.name}`} animal={animal} />))}
          </SimpleGrid>
        )}
    </Flex>
  );
});

export default SafariAnimalList;
