import NoFoundIcon from '../../images/svg/no-found.svg';
import {
  NoFoundBox,
  NoFoundText,
  NoFoundTitle,
  NoFoundCont,
} from './NotFoundFeedback.styled';
import { Button } from 'components/Buttons/Button';
import Modal from 'components/Backdrop/Backdrop';
import ModalAddFeedback from 'components/ModalAddFeedback/ModalAddFeedback';
import { useAppDispatch, useTypedSelector } from 'hooks/useHooks';
import { setModal } from 'redux/modal/modal-slice';


const NotFoundFeedback = () => {
  const dispatch = useAppDispatch();
  const { modal } = useTypedSelector(state => state.modal);

  const modalOpen = () => dispatch(setModal(true));

  return (
    <NoFoundCont>
      <NoFoundBox>
        <img src={NoFoundIcon} alt="noFind" />
        <NoFoundTitle>There is no feedback yet.</NoFoundTitle>
        <NoFoundText>
          Got a suggestion? Found a bug that needs to be squashed? We love
          hearing about new ideas to improve our app.
        </NoFoundText>
        <Button onClick={modalOpen} color="first" width="openModal">
          + Add Feedback
        </Button>
        {modal && (
          <Modal onClose={() => dispatch(setModal(false))}>
            <ModalAddFeedback onClose={() => dispatch(setModal(false))} />
          </Modal>
        )}
      </NoFoundBox>
    </NoFoundCont>
  );
};
export default NotFoundFeedback;
