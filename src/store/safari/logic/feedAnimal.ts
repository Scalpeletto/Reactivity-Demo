import Animal from '../models/Animal';

const feedAnimal = (name: string, animals: Animal[], amount: number) => {
  const animal = animals.findIndex((a) => a.name.toLowerCase() === name.toLowerCase());
  if (animal === -1) {
    return { newAnimalEnergy: null, error: 'Animal not found' };
  }
  if (!animals[animal].alive) {
    return { newAnimalEnergy: null, error: 'Animal cannot eat' };
  }
  return {
    newAnimalEnergy: {
      index: animal,
      newEnergy: animals[animal].energyLevel + amount,
    },
    error: null,
  };
};

export default feedAnimal;
