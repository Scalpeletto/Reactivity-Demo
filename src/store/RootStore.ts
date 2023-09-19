import NavigationStore from './navigation/NavigationStore';
import SafariStore from './safari/SafariStore';

class RootStore {
  navigation: NavigationStore;

  safari: SafariStore;

  constructor() {
    this.navigation = new NavigationStore();
    this.safari = new SafariStore();
  }
}

export default RootStore;
