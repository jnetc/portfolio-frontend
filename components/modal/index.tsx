import { FC, useRef, useEffect } from 'react';
// Hook
import { useStore } from '@Store';
// Components
import { Cloud } from './Cloud';
// Helper
import { animationOptimization } from '@Helpers/functions';

const Modal: FC = ({ children }) => {
  const { modal, toggleModal } = useStore();
  const ref = useRef<HTMLElement>(null);

  if (modal.show) {
    animationOptimization(1000);
    ref.current?.classList.add('modal-transition');
    setTimeout(() => {
      ref.current?.classList.add('modal-show');
      ref.current?.classList.remove('modal-transition');
    }, 0);
  }
  if (!modal.show) {
    animationOptimization(1000);
    ref.current?.classList.add('modal-transition');
    setTimeout(() => {
      ref.current?.classList.remove('modal-show');
      ref.current?.classList.remove('modal-transition');
    }, 1000);
  }

  useEffect(() => {
    if (!modal.show) document.body.removeAttribute('style');
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
          onClick={() => toggleModal({ show: false, name: modal.name })}
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
