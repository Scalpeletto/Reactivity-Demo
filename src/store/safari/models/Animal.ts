import AnimalType from './AnimalType';

interface Animal {
    name: string,
    type: AnimalType,
    energyLevel: number,
    alive: boolean,
    pointsPerTick: number,
    energyLossPerTick: number,
}

export default Animal;
