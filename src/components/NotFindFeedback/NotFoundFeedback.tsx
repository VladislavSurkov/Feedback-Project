import { useState } from 'react';
import NoFindIcon from '../../images/svg/no-find.svg';
import { NoFindBox, NoFindText, NoFindTitle } from './NotFoundFeedback.styled';
import { Button } from 'components/Buttons/Button';

const NotFoundFeedback = () => {
  const [isModal, setIsModal] = useState(false);

  const modalOpen = () => setIsModal(true);

  return (
    <NoFindBox>
      <img src={NoFindIcon} alt="noFind" />
      <NoFindTitle>There is no feedback yet.</NoFindTitle>
      <NoFindText>
        Got a suggestion? Found a bug that needs to be squashed? We love hearing
        about new ideas to improve our app.
      </NoFindText>
      <Button onClick={modalOpen} color="first" width="openModal">
        + Add Feedback
      </Button>
    </NoFindBox>
  );
};
export default NotFoundFeedback;
