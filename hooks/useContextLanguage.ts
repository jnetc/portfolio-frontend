import { useContext, createContext } from 'react';
// Types
import { ContextLanguage } from '@Types';

// Create context
export const state: ContextLanguage = { lang: 'en' };

export const Language = createContext(state);

export const useContextLanguage = () => {
  return useContext(Language);
};
