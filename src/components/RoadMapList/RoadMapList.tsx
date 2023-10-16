import { FC, useState } from 'react';
import ProductList from 'components/ProductList/ProductList';
import { getStatusCounts } from 'helpers/sorting/sortStatus';
import { useTypedSelector } from 'hooks/useHooks';
import { ISortProduct, StatusValue } from 'helpers/types/product';
import { objStatusValue, statusDescript } from 'helpers/Values/Values';
import {
  NavStatusBtn,
  NavStatusCont,
  SortProductCont,
  StatusDesc,
  StatusTitle,
  TitleCont,
} from './RoadMapList.styled';




const RoadMapList: FC = () => {
  const [activeStatus, setActiveStatus] = useState<StatusValue>('In-Progress');

  const { products } = useTypedSelector(state => state.todo);
  const statusCounts = getStatusCounts(products);

  const productsByStatus: ISortProduct = {
    [objStatusValue.Planned]: [],
    [objStatusValue.InProgress]: [],
    [objStatusValue.Live]: [],
  };

  products.forEach(product => {
    const productStatus = product.status as keyof typeof productsByStatus;
    if (productsByStatus[productStatus]) {
      productsByStatus[productStatus].push(product);
    }
  });

  return (
    <>
      <NavStatusCont>
        {Object.entries(statusCounts).map(([status, count]) => (
          <NavStatusBtn
            key={status}
            onClick={() => setActiveStatus(status as StatusValue)}
            className={activeStatus === status ? 'active' : ''}
            color={status}
          >
            {status} ({count})
          </NavStatusBtn>
        ))}
      </NavStatusCont>

      {Object.entries(productsByStatus).map(([status, product]) => (
        <SortProductCont
          key={status}
          className={activeStatus === status ? 'active' : ''}
        >
          <TitleCont>
            <StatusTitle>
              {status} ({product.length})
            </StatusTitle>
            <StatusDesc>
              {statusDescript[status as keyof typeof statusDescript]}
            </StatusDesc>
          </TitleCont>

          <ProductList status={status as StatusValue} products={product} />
        </SortProductCont>
      ))}
    </>
  );
};

export default RoadMapList;
