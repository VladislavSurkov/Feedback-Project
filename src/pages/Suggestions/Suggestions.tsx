import { useEffect } from 'react';

import { useAppDispatch, useTypedSelector } from 'hooks/useHooks';
import { fetchProducts } from 'redux/todo/product-operations';

import ProductList from 'components/ProductList/ProductList';
import SortLine from 'components/SortLine/SortLine';
import NotFoundFeedback from 'components/NotFoundFeedback/NotFoundFeedback';
import {
  getSortProducts,
  getStatusProducts,
} from 'helpers/sorting/sortProducts';


const Suggestions = () => {
  const dispatch = useAppDispatch();
  const {
    auth: { user },
    todo: { products, isLoading },
    filters: { status, sort },
  } = useTypedSelector(state => state);

  const statusProducts = getStatusProducts(products, status);
  const sortProducts = getSortProducts(statusProducts, sort);

  useEffect(() => {
    if (user.email) {
      dispatch(fetchProducts());
    }
  }, [user, dispatch]);

  return (
    <>
      <SortLine />
      {isLoading ? (
        <div>Loading...</div>
      ) : sortProducts.length ? (
        <ProductList products={sortProducts} />
      ) : (
        <NotFoundFeedback />
      )}
    </>
  );
};

export default Suggestions;
