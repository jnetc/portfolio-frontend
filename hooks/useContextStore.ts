import type { ContextStore } from '@Types';
import { useContext, createContext } from 'react';

// Create context
export const storeState: ContextStore = {
  context: null,
  stackoverflow: undefined,
};

export const Store = createContext(storeState);

export const useContextStore = () => {
  return useContext(Store);
};
