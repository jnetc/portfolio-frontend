// Hook
import { useContextMain } from '@Hooks/useContextMain';
// Style
import style from './modal.module.css';

const ModalOverlay = () => {
  const { modal } = useContextMain();

  return (
    <span
      className={
        modal.show
          ? `${style.overlay}`
          : `${style.overlay} ${style.overlay_hidden}`
      }
      data-modal={modal.name}
      data-overlay="true"
    />
  );
};

export default ModalOverlay;
