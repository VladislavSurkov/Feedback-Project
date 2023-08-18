import { ProductList } from "components/ProductList/ProductList";
import { useTypedSelector } from "hooks/useHooks";

const RoadMap = () => {
  const { products, isLoading } = useTypedSelector(state => state.todo);

  return (
    <>
      <div>RoadMap</div>
      {isLoading ? <div>Loading...</div> : <ProductList products={products} />}
    </>
  );
};
export default RoadMap;
