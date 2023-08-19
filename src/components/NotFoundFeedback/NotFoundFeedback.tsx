import { useState } from 'react';
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

const NotFoundFeedback = () => {
  const [isModal, setIsModal] = useState(false);

  const modalOpen = () => setIsModal(true);

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
        {isModal && (
          <Modal onClose={() => setIsModal(false)}>
            <ModalAddFeedback onClose={() => setIsModal(false)} />
          </Modal>
        )}
      </NoFoundBox>
    </NoFoundCont>
  );
};
export default NotFoundFeedback;
