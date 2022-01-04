// Component
import Modal from '@Modal/Modal';
import ModalEmailForm from '@Modal/modal-email-form';
// Hook
import { useContextMain } from '@Hooks/useContextMain';

const ModalSwitch = () => {
  const { modal } = useContextMain();
  return <Modal>{modal.name === 'contact' && <ModalEmailForm />}</Modal>;
};

export default ModalSwitch;
