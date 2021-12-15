import { useContext, createContext } from 'react';
// Types
import { ContextMain } from '@Types';

// Create context
export const state: ContextMain = {
  theme: 'dark',
  switchTheme: theme => theme,
  modal: { show: false },
  toggleModal: show => show,
  notice: { status: 'default' },
  setNotify: notice => notice,
  response: { status: 'default' },
  setResponse: notice => notice,
};

export const Main = createContext(state);

export const useContextMain = () => {
  return useContext(Main);
};
