import NoFoundIcon from '../../images/svg/no-found.svg';
import {
  NoFoundBox,
  NoFoundText,
  NoFoundTitle,
  NoFoundCont,
} from './NotFoundFeedback.styled';
import { Button } from 'components/Buttons/Button';
import { useAppDispatch } from 'hooks/useHooks';
import { setModal } from 'redux/modal/modal-slice';


const NotFoundFeedback = () => {
  const dispatch = useAppDispatch();

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
      </NoFoundBox>
    </NoFoundCont>
  );
};
export default NotFoundFeedback;
