import { useStore } from '@/store/setupContext';
import { observer } from 'mobx-react-lite';

import React from 'react';

import { Text } from '@mantine/core';

const SafariPoints = observer(() => {
  const store = useStore();
  const { safari } = store;
  const { points } = safari;

  return (
    <Text>
      {' '}
      {points}
      {' '}
      Points
    </Text>
  );
});

export default SafariPoints;
