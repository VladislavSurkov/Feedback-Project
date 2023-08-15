import { Product } from 'helpers/types/product';
import { FC } from 'react';
import { useTypedSelector } from 'hooks/useHooks';
import { TbMessageCircle2Filled, TbChevronUp } from 'react-icons/tb';
import  NotFindFeedback  from 'components/NotFindFeedback/NotFoundFeedback';

import {
  ProductBox,
  ProductDesc,
  ProductCategory,
  ProductTitle,
  ProductUpvote,
  ProductComments,
} from './ProductList.styled';

const getStatusProducts = (products: Product[], status: string) => {
  switch (status) {
    case 'All':
      return products;
    default:
      return products.filter(product => product.category === status);
  }
};

const getSortProducts = (products: Product[], sort: string | null) => {
  switch (sort) {
    case 'mostUpvotes':
      return [...products].sort((a, b) => b.upvotes - a.upvotes);
    case 'leastUpvotes':
      return [...products].sort((a, b) => a.upvotes - b.upvotes);
      
    // case 'mostComments':
    //   console.log(sort);
    //   sort.sort((a, b) => a - b);
    //   break;
    // case 'leastComments':
    //   sort.sort((a, b) => b.comments.length - a.comments.length);
    //   break;
    default:
      return products;
  };
}

export const ProductList: FC = () => {
  const { products } = useTypedSelector(state => state.todo);
  const { status, sort } = useTypedSelector(state => state.filters);

  const statusProducts = getStatusProducts(products, status);
  const sortProducts = getSortProducts(statusProducts, sort)

  return (
    <>
      {sortProducts.length ? (
        <div>
          {sortProducts.map(product => (
            <ProductBox key={product._id}>
              <ProductUpvote>
                <TbChevronUp
                  style={{ color: '#4661E6', marginRight: '10px' }}
                />
                {product.upvotes}
              </ProductUpvote>
              <div>
                <ProductTitle>{product.title}</ProductTitle>
                <ProductDesc>{product.description}</ProductDesc>
                <ProductCategory>
                  {product.category.charAt(0).toUpperCase() +
                    product.category.slice(1)}
                </ProductCategory>
              </div>
              <ProductComments>
                <TbMessageCircle2Filled
                  style={{ color: '#CDD2EE', marginRight: '4px' }}
                />
                {product.comments ? product.comments.length : 0}
              </ProductComments>
            </ProductBox>
          ))}
        </div>
      ) : (
        <NotFindFeedback />
      )}
    </>
  );
};
