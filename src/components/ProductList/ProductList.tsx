import { List, Product } from 'helpers/types/product';
import { FC } from 'react';
import { useTypedSelector } from 'hooks/useHooks';
import { TbMessageCircle2Filled, TbChevronUp } from 'react-icons/tb';
import {
  ProductBox,
  ProductDesc,
  ProductCategory,
  ProductTitle,
  ProductUpvote,
  ProductComments,
} from './ProductList.styled';

 const getStatusProducts = (products: Product[], status:string) => {
   switch (status) {
     case 'All':
       return products;
     case status:
       return products.filter(product => product.category === status);
     default:
       return products;
   }
  };


export const ProductList: FC<List> = () => {
  const { products } = useTypedSelector(state => state.todo);
  const { status } = useTypedSelector(state => state.filters);

  const statusProducts = getStatusProducts(products, status);
 

  return (
    <div>
      {statusProducts.map(product => (
        <ProductBox key={product._id}>
          <ProductUpvote>
            <TbChevronUp style={{ color: '#4661E6', marginRight: '10px' }} />
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
  );
};
