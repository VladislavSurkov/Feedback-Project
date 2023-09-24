import { Button } from 'components/Buttons/Button';
import ProductList from 'components/ProductList/ProductList';
import { useAppDispatch, useTypedSelector } from 'hooks/useHooks';
import { useLocation, useNavigate } from 'react-router-dom';
import { setModal } from 'redux/modal/modal-slice';
import {
  RoadLine,
  BackCont,
  RoadTitle,
  BackBtn,
  ArrowBtn,
} from './RoadMap.styled';

const RoadMap = () => {
  const dispatch = useAppDispatch();
  const { products, isLoading } = useTypedSelector(state => state.todo);

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

      {isLoading ? <div>Loading...</div> : <ProductList products={products} />}
    </>
  );
};
export default RoadMap;
