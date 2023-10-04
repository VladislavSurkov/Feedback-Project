import { FC, useState } from 'react';
import ProductList from 'components/ProductList/ProductList';
import { getStatusCounts } from 'helpers/sorting/sortStatus';
import { useTypedSelector } from 'hooks/useHooks';
import { NavStatusBtn, NavStatusCont } from './RoadMapList.styled';
import { ISortProduct } from 'helpers/types/product';


const RoadMapList: FC = () => {
  const [activeStatus, setActiveStatus] = useState('In-Progress');

  const { products } = useTypedSelector(state => state.todo);
  const statusCounts = getStatusCounts(products);

  const productsByStatus: ISortProduct = {
    'Planned': [],
    'In-Progress': [],
    'Live': [],
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
        <div key={status}>
          <ProductList products={productList} />
        </div>
      ))}
    </>
  );
};

export default RoadMapList;
