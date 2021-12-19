// Component
import Modal from '@Modal/Modal';
import ModalEmailForm from '@Modal/modal-email-form';
import ModalForEmployers from '@Modal/modal-for-employers';
// Hook
import { useContextMain } from '@Hooks/useContextMain';

const ModalSwitch = () => {
  const { modal } = useContextMain();
  return (
    <Modal>
      {modal.name === 'emailform' && <ModalEmailForm />}
      {modal.name === 'employers' && <ModalForEmployers />}
    </Modal>
  );
};

export default ModalSwitch;
