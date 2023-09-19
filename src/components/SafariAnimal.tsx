/* eslint-disable no-nested-ternary */
import React from 'react';
import { useStore } from '@/store/setupContext';
import { observer } from 'mobx-react-lite';

import {
  Text, Card, Center, useMantineTheme, Button,
} from '@mantine/core';
import { IconMoodSmile, IconMoodCry, IconSkull } from '@tabler/icons-react';

import Animal from '@/store/safari/models/Animal';

interface SafariAnimalProps {
  animal: Animal;
}

const SafariAnimal = observer(({ animal }: SafariAnimalProps) => {
  const theme = useMantineTheme();
  const store = useStore();
  const { safari } = store;
  const { feedAnimal, currentlyOnSafari } = safari;

  return (
    <Card>
      <Card.Section>
        <Center>
          {animal.alive ? (
            animal.energyLevel > 25 ? (
              <IconMoodSmile size={24} color={theme.colors.teal[6]} />
            ) : (
              <IconMoodCry size={24} color={theme.colors.orange[6]} />
            )
          ) : (
            <IconSkull size={24} color={theme.colors.red[6]} />
          )}
          {animal.energyLevel}
          {' '}
          (-
          {animal.energyLossPerTick}
          /s)
        </Center>
      </Card.Section>
      <Center>
        <Text ta="center">{animal.name}</Text>
      </Center>
      <Center>
        <Text ta="center" size="sm">
          +
          {animal.pointsPerTick}
          {' '}
          points/s
        </Text>
      </Center>
      <Button
        fullWidth
        variant="gradient"
        size="compact-sm"
        disabled={!currentlyOnSafari || !animal.alive}
        onClick={() => {
          feedAnimal(animal.name, animal.energyLossPerTick);
        }}
      >
        Feed
      </Button>
    </Card>
  );
});

export default SafariAnimal;
