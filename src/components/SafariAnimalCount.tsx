import { useStore } from '@/store/setupContext';
import { observer } from 'mobx-react-lite';

import React from 'react';

import { Text } from '@mantine/core';

const SafariAnimalCount = observer(() => {
  const store = useStore();
  const { safari } = store;
  const { aliveAnimals, deadAnimals } = safari;

  return (
    <Text>
      Animals:
      {' '}
      {aliveAnimals.length + deadAnimals.length}
      {' '}
      (
      {aliveAnimals.length}
      {' '}
      alive
      {', '}
      {deadAnimals.length}
      {' '}
      dead )
    </Text>
  );
});

export default SafariAnimalCount;
