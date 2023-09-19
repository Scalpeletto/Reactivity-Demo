/* eslint-disable max-len */
import {
  makeObservable, observable, action, computed,
} from 'mobx';

import Animal from './models/Animal';
import AnimalType from './models/AnimalType';
import newAnimal from './logic/newAnimal';
import feedAnimal from './logic/feedAnimal';

class SafariStore {
  animals: Animal[] = [];

  currentlyOnSafari = false;

  secondsPassed = 0;

  safariTimerId: NodeJS.Timeout | null = null;

  errors: string[] = [];

  constructor() {
    makeObservable(this, {
      secondsPassed: observable,
      currentlyOnSafari: observable,
      errors: observable,

      aliveAnimals: computed,
      deadAnimals: computed,
      isSafariEmpty: computed,
      endangeredAnimals: computed,

      toggleSafariStatus: action,
      updateSecondsPassed: action,
      addNewAnimal: action,
      feedAnimal: action,
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

  get endangeredAnimals() {
    return this.aliveAnimals.filter((animal) => animal.energyLevel <= 10);
  }

  toggleSafariStatus = () => {
    this.currentlyOnSafari = !this.currentlyOnSafari;
    if (this.currentlyOnSafari) {
      this.safariTimerId = setInterval(() => { this.secondsPassed += 1; }, 1000);
    } else if (this.safariTimerId) {
      clearInterval(this.safariTimerId);
      this.safariTimerId = null;
    }
  };

  updateSecondsPassed = () => {
    this.secondsPassed += 1;
  };

  addNewAnimal = (newType: AnimalType) => {
    this.animals.push(newAnimal(newType));
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
