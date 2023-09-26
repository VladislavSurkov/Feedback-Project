import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { IPropsModal } from 'helpers/types/modal';
import { useAppDispatch } from 'hooks/useHooks';
import { setModal } from 'redux/modal/modal-slice';
import {
  BackdropCont,
  BtnGoBack,
  ModalCont,
  ArrowLBtn,
} from './Backdrop.styled';


const modalEl = document.getElementById('modal-root') as HTMLElement;
const ESCAPE_KEY = 'Escape';

export default function Backdrop({ children }: IPropsModal) {
  const dispatch = useAppDispatch();

  const modalClose = () => dispatch(setModal(false));

  const handleBackdropCloseModal = ({
    target,
    currentTarget,
  }: React.MouseEvent) => {
    if (target === currentTarget) {
      modalClose();
    }
  };

  useEffect(() => {
    const escapeModal = (event: KeyboardEvent) => {
      if (event.code === ESCAPE_KEY) {
        event.preventDefault();
        dispatch(setModal(false));
      }
    };

    window.addEventListener('keydown', escapeModal);

    return () => {
      window.removeEventListener('keydown', escapeModal);
    };
  }, [dispatch]);

  return createPortal(
    <BackdropCont onClick={handleBackdropCloseModal}>
      <ModalCont>
        <BtnGoBack onClick={modalClose}>
          <ArrowLBtn /> Go Back
        </BtnGoBack>
        {children}
      </ModalCont>
    </BackdropCont>,
    modalEl
  );
}
