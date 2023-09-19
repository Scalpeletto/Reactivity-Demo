import { makeObservable, observable } from 'mobx';

// TODO - control navigation in react router via mobx
class NavigationStore {
  currentUrl = '';

  constructor() {
    makeObservable(this, {
      currentUrl: observable,
    });
  }
}

export default NavigationStore;
