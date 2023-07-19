import { useEffect, useState } from 'react';
import SortLine from 'components/SortLine/SortLine';
import NotFindFeedback from 'components/NotFindFeedback/NotFoundFeedback';
import { Wrapper } from './Suggestions.styled';
import { useAppDispatch, useTypedSelector } from 'hooks/useHooks';
import { fetchProducts } from 'redux/todo/product-operations';
import { ProductList } from 'components/ProductList/ProductList';
import { Product } from 'helpers/types/product';

export const Suggestions = () => {
  const dispatch = useAppDispatch();
  const { isLoading, products } = useTypedSelector(state => state.todo);
  const [updateProducts, setupdateProducts] = useState<Product[]>([]);
;
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <SortLine products={products} setupdateProducts={setupdateProducts} />
      <Wrapper>
        {isLoading ? (
          <div>Loading..</div>
        ) : products.length ? (
          <ProductList
            products={updateProducts.length ? updateProducts : products}
          />
        ) : (
          <NotFindFeedback />
        )}
      </Wrapper>
    </>
  );
};
