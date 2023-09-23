import { Button } from 'components/Buttons/Button';
import ProductList from 'components/ProductList/ProductList';
import { useAppDispatch, useTypedSelector } from 'hooks/useHooks';
import { useLocation, useNavigate } from 'react-router-dom';
import { setModal } from 'redux/modal/modal-slice';

const RoadMap = () => {
  const dispatch = useAppDispatch();
  const { products, isLoading } = useTypedSelector(state => state.todo);

  const location = useLocation();
  const navigate = useNavigate();

  const backTo = () => navigate(location.state?.from ?? '/');

  return (
    <>
      <div>
        <div>
          <button onClick={backTo}>Go Back</button>
          <span>RoadMap</span>
        </div>
        <Button
          onClick={() => dispatch(setModal(true))}
          color="first"
          width="openModal"
        >
          + Add Feedback
        </Button>
      </div>

      {isLoading ? <div>Loading...</div> : <ProductList products={products} />}
    </>
  );
};
export default RoadMap;
