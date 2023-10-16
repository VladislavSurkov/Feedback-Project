import { useTypedSelector } from 'hooks/useHooks';
import ProductList from 'components/ProductList/ProductList';
import SortLine from 'components/SortLine/SortLine';
import NotFoundFeedback from 'components/NotFoundFeedback/NotFoundFeedback';
import {
  getSortProducts,
  getStatusProducts,
} from 'helpers/sorting/sortProducts';
import { ListContainer } from './Suggesrions.styled';


const Suggestions = () => {
  const {
    todo: { products, isLoading },
    filters: { status, sort },
  } = useTypedSelector(state => state);

  const statusProducts = getStatusProducts(products, status);
  const sortProducts = getSortProducts(statusProducts, sort);

  return (
    <>
      <SortLine />
      <ListContainer>
        {isLoading ? (
          <div>Loading...</div>
        ) : sortProducts.length ? (
          <ProductList products={sortProducts} />
        ) : (
          <NotFoundFeedback />
        )}
      </ListContainer>
    </>
  );
};

export default Suggestions;
