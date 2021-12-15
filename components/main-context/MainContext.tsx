import { useState, useEffect } from 'react';
// Components
import Notice from '@Notice';
import ModalSwitch from '@Modal/ModalSwitch';
import { ModalOverlay } from '@Modal/ModalOverlay';
import Navigation from '@Navigation/Navigation';
import Home from '@Home/Home';
// Helpers
import { animationOptimization } from '@Helpers/functions';
// Hook
import { Main, state } from '@Hooks/useContextMain';
const MainContext = () => {
  const [theme, switchTheme] = useState(state.theme);
  const [modal, toggleModal] = useState(state.modal);
  const [notice, setNotify] = useState(state.notice);
  const [response, setResponse] = useState(state.response);

  useEffect(() => {
    document.addEventListener('click', ev => {
      const el = ev.target as HTMLElement;

      if (el.dataset.modal === 'open-modal') {
        document.body.style.overflow = 'hidden';
      }

      if (!el.classList.contains('modal__overlay')) return;

      animationOptimization(1000);
      toggleModal({ show: false, name: el.dataset.modal });
      document.body.removeAttribute('style');
    });

    return () => {
      document.addEventListener('click', () => {});
    };
  }, []);
  return (
    <Main.Provider
      value={{
        theme,
        modal,
        notice,
        response,
        setResponse,
        switchTheme,
        setNotify,
        toggleModal,
      }}
    >
      <Notice />
      <ModalSwitch />
      <ModalOverlay />
      <Navigation />
      <Home />
    </Main.Provider>
  );
};

export default MainContext;
