import { useState } from 'react';
import NoFindIcon from '../../images/svg/no-find.svg';
import {
  NoFindBox,
  NoFindText,
  NoFindTitle,
  NoFindCont,
} from './NotFoundFeedback.styled';
import { Button } from 'components/Buttons/Button';
import Modal from 'components/Backdrop/Backdrop';
import ModalAddFeedback from 'components/ModalAddFeedback/ModalAddFeedback';

const NotFoundFeedback = () => {
  const [isModal, setIsModal] = useState(false);

  const modalOpen = () => setIsModal(true);

  return (
    <NoFindCont>
      <NoFindBox>
        <img src={NoFindIcon} alt="noFind" />
        <NoFindTitle>There is no feedback yet.</NoFindTitle>
        <NoFindText>
          Got a suggestion? Found a bug that needs to be squashed? We love
          hearing about new ideas to improve our app.
        </NoFindText>
        <Button onClick={modalOpen} color="first" width="openModal">
          + Add Feedback
        </Button>
        {isModal && (
          <Modal onClose={() => setIsModal(false)}>
            <ModalAddFeedback onClose={() => setIsModal(false)} />
          </Modal>
        )}
      </NoFindBox>
    </NoFindCont>
  );
};
export default NotFoundFeedback;
