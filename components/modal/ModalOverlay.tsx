import { FC } from 'react';
// Hook
import { useContextMain } from '@Hooks/useContextMain';

export const ModalOverlay: FC = () => {
  const { modal } = useContextMain();

  return (
    <span
      className={
        modal.show ? 'modal__overlay' : 'modal__overlay overlay-hidden'
      }
      data-modal={modal.name}
    />
  );
};
