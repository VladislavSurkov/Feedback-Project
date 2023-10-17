import { useTypedSelector } from 'hooks/useHooks';
import ProductList from 'components/ProductList/ProductList';
import SortLine from 'components/SortLine/SortLine';
import NotFoundFeedback from 'components/NotFoundFeedback/NotFoundFeedback';
import {
  getSortProducts,
  getCategoryProducts,
} from 'helpers/sorting/sortProducts';
import { ListContainer } from './Suggesrions.styled';


const Suggestions = () => {
  const {
    todo: { products, isLoading },
    filters: { categories, sort },
  } = useTypedSelector(state => state);

  const statusProducts = getCategoryProducts(products, categories);
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
