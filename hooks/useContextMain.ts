import type { ContextMain } from '@Types';
import { useContext, createContext } from 'react';

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
