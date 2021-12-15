import { useContext, createContext } from 'react';
// Types
import { ContextStore } from '@Types';

// Create context
export const storeState: ContextStore = {
  context: null,
  lang: 'en',
  // theme: 'dark',
  // switchTheme: theme => theme,
  stackoverflow: null,
  // modal: { show: false },
  // toggleModal: show => show,
  // notice: { status: 'default' },
  // setNotify: notice => notice,
};

export const Store = createContext(storeState);

export const useContextStore = () => {
  return useContext(Store);
};
