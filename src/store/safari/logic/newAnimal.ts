import { faker } from '@faker-js/faker';

import Animal from '../models/Animal';
import AnimalType from '../models/AnimalType';

const newAnimal = (animalType: AnimalType) => {
  switch (animalType) {
    case AnimalType.Giraffe:
      return newGiraffe();
    case AnimalType.Cat:
      return newCat();
    case AnimalType.Unknown:
    default:
      return newUnknown();
  }
};

const newGiraffe = (): Animal => ({
  name: `${faker.person.firstName()} the Giraffe`,
  type: AnimalType.Giraffe,
  energyLevel: 100,
  alive: true,
  pointsPerTick: 100,
  energyLossPerTick: 10,
});

const newCat = (): Animal => ({
  name: `${faker.person.firstName()} the Cat`,
  type: AnimalType.Cat,
  energyLevel: 40,
  alive: true,
  pointsPerTick: 75,
  energyLossPerTick: 5,
});

const newUnknown = (): Animal => ({
  name: `${faker.person.firstName()} the ${faker.animal.type()}`,
  type: AnimalType.Unknown,
  energyLevel: faker.number.int({ min: 40, max: 200 }),
  alive: true,
  pointsPerTick: faker.number.int({ min: 1, max: 200 }),
  energyLossPerTick: faker.number.int({ min: 1, max: 20 }),
});

export default newAnimal;
