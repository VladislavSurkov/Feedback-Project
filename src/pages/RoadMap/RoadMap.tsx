import ProductList from 'components/ProductList/ProductList';
import { useTypedSelector } from 'hooks/useHooks';
import { useLocation, useNavigate } from 'react-router-dom';

const RoadMap = () => {
  const { products, isLoading } = useTypedSelector(state => state.todo);

  const location = useLocation();
  const navigate = useNavigate();

  const backTo = () => {
    navigate(location.state?.from ?? '/');
  };

  return (
    <>
      <div>
        <button onClick={backTo}>Go Back</button> RoadMap
      </div>
      {isLoading ? <div>Loading...</div> : <ProductList products={products} />}
    </>
  );
};
export default RoadMap;
