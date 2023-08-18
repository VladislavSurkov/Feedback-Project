import { FC } from 'react';
import { TbMessageCircle2Filled, TbChevronUp } from 'react-icons/tb';

import { IProductProps } from 'helpers/types/product';
import  NotFindFeedback  from 'components/NotFindFeedback/NotFoundFeedback';

import {
  ProductBox,
  ProductDesc,
  ProductCategory,
  ProductTitle,
  ProductUpvote,
  ProductComments,
  ListContainer,
} from './ProductList.styled';


 const ProductList: FC<IProductProps> = ({ products }) => {
  return (
    <>
      {products.length ? (
        <ListContainer>
          {products.map(product => (
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
        </ListContainer>
      ) : (
        <NotFindFeedback />
      )}
    </>
  );
};

export default ProductList