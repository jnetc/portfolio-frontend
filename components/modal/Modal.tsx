import { FC, useRef, useEffect } from 'react';
// Hook
import { useContextMain } from '@Hooks/useContextMain';
// Components
import { Cloud } from './Cloud';
// Helper
import { animationOptimization } from '@Helpers/functions';
// Style
import style from './modal.module.css';

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
      el?.classList.add(`${style.transition}`);
      setTimeout(() => {
        el?.classList.add(`${style.show}`);
        el?.classList.remove(`${style.transition}`);
      }, 100);
    }
    if (!modal.show) {
      el?.classList.add(`${style.transition}`);
      setTimeout(() => {
        el?.classList.remove(`${style.show}`);
        el?.classList.remove(`${style.transition}`);
      }, 500);
      document.body.removeAttribute('style');
    }

    return () => {
      el = null;
    };
  }, [modal.show]);

  return (
    <section
      className={style.module}
      role="dialog"
      aria-labelledby="dialog title"
      aria-describedby="dialog description"
      ref={ref}
    >
      <div className={style.close}>
        <span
          className={style.close_button}
          role="button"
          tabIndex={0}
          title="close button"
          onClick={closeModal(modal.name || 'emailform')}
        />
      </div>
      <div className={style.wrapper}>
        <div className={style.svg_clouds}>
          <Cloud cloudSize={style.size_l} />
          <Cloud cloudSize={style.size_m} />
          <Cloud cloudSize={style.size_s} />
        </div>
        {children}
      </div>
    </section>
  );
};

export default Modal;
