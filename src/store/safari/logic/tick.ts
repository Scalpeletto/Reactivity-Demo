/* eslint-disable max-len */
import Animal from '../models/Animal';

const tickSafari = (points: number, animals: Animal[]): {newPoints: number, newAnimals: Animal[]} => {
  const newAnimals = animals.map((animal) => {
    const newAnimal = animal;
    if (newAnimal.alive) {
      newAnimal.energyLevel = Math.max(newAnimal.energyLevel - animal.energyLossPerTick, 0);
      newAnimal.alive = animal.energyLevel > 0;
    }
    return newAnimal;
  });

  const newPoints = newAnimals.filter((a) => a.alive)
    .map((a) => a.pointsPerTick)
    .reduce((sum, cur) => sum + cur, points);

  return { newPoints, newAnimals };
};

export default tickSafari;
