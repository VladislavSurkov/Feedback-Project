import { Button } from 'components/Buttons/Button';
import { useAppDispatch } from 'hooks/useHooks';
import { useLocation, useNavigate } from 'react-router-dom';
import { setModal } from 'redux/modal/modal-slice';
import {
  RoadLine,
  BackCont,
  RoadTitle,
  BackBtn,
  ArrowBtn,
} from './RoadMap.styled';
import RoadMapList from 'components/RoadMapList/RoadMapList';

const RoadMap = () => {
  const dispatch = useAppDispatch();
  const modalOpen = () => dispatch(setModal(true));

  const location = useLocation();
  const navigate = useNavigate();

  const backTo = () => navigate(location.state?.from ?? '/');

  return (
    <>
      <RoadLine>
        <BackCont>
          <BackBtn onClick={backTo}>
            <ArrowBtn /> Go Back
          </BackBtn>
          <RoadTitle>RoadMap</RoadTitle>
        </BackCont>
        <Button onClick={modalOpen} color="first" width="openModal">
          + Add Feedback
        </Button>
      </RoadLine>

      <RoadMapList/>
    </>
  );
};
export default RoadMap;
