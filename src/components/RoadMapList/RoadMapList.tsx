import { FC, useState } from 'react';
import ProductList from 'components/ProductList/ProductList';
import { getStatusCounts, sortValue } from 'helpers/sorting/sortStatus';
import { useTypedSelector } from 'hooks/useHooks';
import { ISortProduct } from 'helpers/types/product';
import {
  NavStatusBtn,
  NavStatusCont,
  SortProductCont,
} from './RoadMapList.styled';


const RoadMapList: FC = () => {
  const [activeStatus, setActiveStatus] = useState('In-Progress');

  const { products } = useTypedSelector(state => state.todo);
  const statusCounts = getStatusCounts(products);

  const productsByStatus: ISortProduct = {
    [sortValue.Planned]: [],
    [sortValue.InProgress]: [],
    [sortValue.Live]: [],
  };

  products.forEach(product => {
    productsByStatus[product.status as keyof typeof productsByStatus].push(
      product
    );
  });

  const handleStatusClick = (status: string) => {
    setActiveStatus(status);
  };

  return (
    <>
      <NavStatusCont>
        {Object.entries(statusCounts).map(([status, count]) => (
          <NavStatusBtn
            key={status}
            onClick={() => handleStatusClick(status)}
            className={activeStatus === status ? 'active' : ''}
            color={status}
          >
            {status} ({count})
          </NavStatusBtn>
        ))}
      </NavStatusCont>

      {Object.entries(productsByStatus).map(([status, productList]) => (
        <SortProductCont
          key={status}
          className={activeStatus === status ? 'active' : ''}
        >
          <div>
            <h3>
              {status} ({productList.length})
            </h3>
            <span>text</span>
          </div>

          <ProductList products={productList} />
        </SortProductCont>
      ))}
    </>
  );
};

export default RoadMapList;
