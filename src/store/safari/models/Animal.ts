import AnimalType from './AnimalType';

interface Animal {
    name: string,
    type: AnimalType,
    energyLevel: number,
    alive: boolean,
}

export default Animal;
