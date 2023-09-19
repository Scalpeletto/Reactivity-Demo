import { useStore } from '@/store/setupContext';
import { observer } from 'mobx-react-lite';

import React from 'react';

import { Text, useMantineTheme, Flex } from '@mantine/core';

const SafariSeconds = observer(() => {
  const theme = useMantineTheme();
  const store = useStore();
  const { safari } = store;
  const { currentlyOnSafari, secondsPassed } = safari;

  return (
    <Flex gap="xs">
      <Text c={currentlyOnSafari ? theme.colors.teal[6] : theme.colors.red[4]}>
        {currentlyOnSafari ? 'Running' : 'Not Running'}
      </Text>
      <Text>
        (
        {' '}
        {secondsPassed}
        {' '}
        Seconds Total
        )
      </Text>
    </Flex>
  );
});

export default SafariSeconds;
