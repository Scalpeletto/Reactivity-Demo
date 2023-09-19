/* eslint-disable max-len */
import {
  makeObservable, observable, action, computed,
} from 'mobx';

import Animal from './models/Animal';
import AnimalType from './models/AnimalType';
import newAnimal from './logic/newAnimal';
import feedAnimal from './logic/feedAnimal';
import tickSafari from './logic/tick';

class SafariStore {
  animals: Animal[] = [];

  currentlyOnSafari = false;

  secondsPassed = 0;

  points = 0;

  safariTimerId: NodeJS.Timeout | null = null;

  errors: string[] = [];

  animalToAdd: AnimalType | null = null;

  constructor() {
    makeObservable(this, {
      secondsPassed: observable,
      currentlyOnSafari: observable,
      errors: observable,
      animalToAdd: observable,
      animals: observable,
      points: observable,

      aliveAnimals: computed,
      deadAnimals: computed,
      isSafariEmpty: computed,

      reset: action,
      toggleSafariStatus: action,
      updateSecondsPassed: action,
      addNewAnimal: action,
      feedAnimal: action,
      updateAnimalToAdd: action,
    });
  }

  get aliveAnimals() {
    return this.animals.filter((animal) => animal.alive);
  }

  get deadAnimals() {
    return this.animals.filter((animal) => !animal.alive);
  }

  get isSafariEmpty() {
    return this.animals.length === 0;
  }

  toggleSafariStatus = () => {
    this.currentlyOnSafari = !this.currentlyOnSafari;
    if (this.currentlyOnSafari) {
      this.safariTimerId = setInterval(() => {
        this.secondsPassed += 1;
        const { newPoints, newAnimals } = tickSafari(this.points, this.animals);
        this.points = newPoints;
        this.animals = newAnimals;
      }, 1000);
    } else if (this.safariTimerId) {
      clearInterval(this.safariTimerId);
      this.safariTimerId = null;
    }
  };

  reset = () => {
    this.animals = [];
    this.currentlyOnSafari = false;
    this.secondsPassed = 0;
    this.points = 0;
    if (this.safariTimerId) {
      clearInterval(this.safariTimerId);
    }
    this.safariTimerId = null;
    this.errors = [];
    this.animalToAdd = null;
  };

  updateSecondsPassed = () => {
    this.secondsPassed += 1;
  };

  addNewAnimal = () => {
    if (this.animalToAdd === null) {
      this.errors.push('No animal type to add selected');
      return;
    }
    this.animals.push(newAnimal(this.animalToAdd));
  };

  updateAnimalToAdd = (type: AnimalType) => {
    this.animalToAdd = type;
  };

  feedAnimal = (name: string, amount: number) => {
    const { newAnimalEnergy, error } = feedAnimal(name, this.aliveAnimals, amount);
    if (error && !newAnimalEnergy) {
      this.errors.push(error);
    } else if (newAnimalEnergy) {
      const animal = this.animals[newAnimalEnergy.index];
      animal.energyLevel = newAnimalEnergy.newEnergy;
      this.animals[newAnimalEnergy.index] = animal;
    }
  };
}

export default SafariStore;
