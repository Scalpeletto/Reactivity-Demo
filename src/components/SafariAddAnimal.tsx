/* eslint-disable max-len */
import { useStore } from '@/store/setupContext';
import { observer } from 'mobx-react-lite';

import React from 'react';

import {
  Select, Text, Flex, Button,
} from '@mantine/core';
import AnimalType from '@/store/safari/models/AnimalType';

const SafariAddAnimal = observer(() => {
  const store = useStore();
  const { safari } = store;
  const {
    addNewAnimal, updateAnimalToAdd, animalToAdd,
  } = safari;

  return (
    <Flex direction="row" align="center">
      <Text pr="md" size="lg">Add Animal</Text>
      <Select
        size="xs"
        pr="md"
        value={animalToAdd}
        onChange={(newVal) => {
          if (newVal !== null) {
            updateAnimalToAdd(AnimalType[newVal as keyof typeof AnimalType]);
          }
        }}
        placeholder="Select Animal Type"
        data={[AnimalType.Cat, AnimalType.Giraffe, AnimalType.Unknown]}
      />
      <Button
        disabled={animalToAdd === null}
        size="compact-md"
        onClick={() => addNewAnimal()}
      >
        Add
      </Button>
    </Flex>
  );
});

export default SafariAddAnimal;
