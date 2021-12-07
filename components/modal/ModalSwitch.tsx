import { FC } from 'react';
// Component
import Modal from '@Modal';
import ModalEmailForm from 'components/modal-email-form';
import ModalForEmployers from 'components/modal-for-employers';
// Hook
import { useStore } from '@Store';

const ModalSwitch: FC = () => {
  const { modal } = useStore();
  return (
    <Modal>
      {modal.name === 'emailform' && <ModalEmailForm />}
      {modal.name === 'employers' && <ModalForEmployers />}
    </Modal>
  );
};

export default ModalSwitch;
