import { useContext, createContext } from 'react';
// Types
import { ContextStore } from '@Types';

// Create context
export const storeState: ContextStore = {
  context: null,
  stackoverflow: undefined,
};

export const Store = createContext(storeState);

export const useContextStore = () => {
  return useContext(Store);
};
