import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ReactComponent as ArrowLeft } from 'icons/icon-arrow-left.svg';
import { Backdrop, BtnGoBack, ModalContainer } from './Backdrop.styled';
import { IPropsModal } from 'helpers/types/modal';


const modalEl = document.getElementById('modal-root') as HTMLElement;
const ESCAPE_KEY = 'Escape';


export default function Modal({ onClose, children }: IPropsModal) {
  const handleBackdropCloseModal = ({
    target,
    currentTarget,
  }: React.MouseEvent) => {
    if (target === currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    const escapeModal = (event: KeyboardEvent) => {
      if (event.code === ESCAPE_KEY) {
        event.preventDefault();
        onClose();
      }
    };

    window.addEventListener('keydown', escapeModal);

    return () => {
      window.removeEventListener('keydown', escapeModal);
    };
  }, [onClose]);

  return createPortal(
    <Backdrop onClick={handleBackdropCloseModal}>
      <ModalContainer>
        <BtnGoBack onClick={onClose}>
          <ArrowLeft style={{ marginRight: '16px' }} /> Go Back
        </BtnGoBack>
        {children}
      </ModalContainer>
    </Backdrop>,
    modalEl
  );
}
