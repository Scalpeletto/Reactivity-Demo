/* eslint-disable react/function-component-definition */
import React, { createContext, PropsWithChildren, useContext } from 'react';

import RootStore from './RootStore';

const setupContext = () => {
  const rootStore = new RootStore();
  const storeContext = createContext(rootStore);

  const StoreProvider: React.FC<PropsWithChildren<object>> = ({ children }) => (
    <storeContext.Provider value={rootStore}>{children}</storeContext.Provider>
  );

  const useStore = () => {
    const storeInstance = useContext(storeContext);
    return storeInstance;
  };

  return { StoreProvider, useStore };
};

export const { StoreProvider, useStore } = setupContext();
