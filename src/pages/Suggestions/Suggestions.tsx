import { useEffect } from 'react';
import SortLine from 'components/SortLine/SortLine';
import { Wrapper } from './Suggestions.styled';
import { useAppDispatch, useTypedSelector } from 'hooks/useHooks';
import { fetchProducts } from 'redux/todo/product-operations';
import { ProductList } from 'components/ProductList/ProductList';

export const Suggestions = () => {
  const dispatch = useAppDispatch();
  const { user } = useTypedSelector(state => state.auth);
  const { isLoading } = useTypedSelector(state => state.todo);

  useEffect(() => {
    if (user.email) {
      dispatch(fetchProducts());
    }
  }, [user, dispatch]);

  return (
    <>
      <SortLine />
      <Wrapper>{isLoading ? <div>Loading..</div> : <ProductList />}</Wrapper>
    </>
  );
};
