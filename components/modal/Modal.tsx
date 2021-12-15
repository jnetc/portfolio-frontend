import { FC, useRef, useEffect } from 'react';
// Hook
import { useContextMain } from '@Hooks/useContextMain';
// Components
import { Cloud } from './Cloud';
// Helper
import { animationOptimization } from '@Helpers/functions';

const Modal: FC = ({ children }) => {
  const { modal, toggleModal } = useContextMain();
  const ref = useRef<HTMLElement>(null);

  const closeModal = (name: string) => {
    return () => {
      animationOptimization(1000);
      toggleModal({ show: false, name });
    };
  };

  useEffect(() => {
    let el = ref.current;

    if (modal.show) {
      el?.classList.add('modal-transition');
      setTimeout(() => {
        el?.classList.add('modal-show');
        el?.classList.remove('modal-transition');
      }, 100);
    }
    if (!modal.show) {
      el?.classList.add('modal-transition');
      setTimeout(() => {
        el?.classList.remove('modal-show');
        el?.classList.remove('modal-transition');
      }, 500);
      document.body.removeAttribute('style');
    }

    return () => {
      el = null;
    };
  }, [modal.show]);

  return (
    <section
      className="modal"
      role="dialog"
      aria-labelledby="dialog title"
      aria-describedby="dialog description"
      ref={ref}
    >
      <div className="modal__close">
        <span
          className="modal__close-button"
          role="button"
          tabIndex={0}
          title="close button"
          onClick={closeModal(modal.name || 'emailform')}
        />
      </div>
      <div className="modal__wrapper">
        <div className="modal__clouds">
          <Cloud cloudSize="l" />
          <Cloud cloudSize="m" />
          <Cloud cloudSize="s" />
        </div>
        {children}
      </div>
    </section>
  );
};

export default Modal;
