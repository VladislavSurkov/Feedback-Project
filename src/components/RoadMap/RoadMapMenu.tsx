import { FC } from 'react';

import { useTypedSelector } from 'hooks/useHooks';

import {
  StatusContainer,
  StatusMapTitle,
  StatusMapLink,
  TitleContainer,
  RoadLi,
  RoadCount,
} from './RoadMapMenu.styled';


const RoadMapMenu: FC = () => {
  const { products } = useTypedSelector(state => state.todo);

  const statusCounts = products.reduce(
    (counts, product) => {
      counts[product.status]++;
      return counts;
    },
    {
      'Planned': 0,
      'In-Progress': 0,
      'Live': 0,
    } as Record<string, number>
  );

  return (
    <StatusContainer>
      <TitleContainer>
        <StatusMapTitle>Roadmap</StatusMapTitle>
        <StatusMapLink to="/roadmap">View</StatusMapLink>
      </TitleContainer>

      <ul>
        {Object.entries(statusCounts).map(([status, count]) => (
          <RoadLi key={status} status={status}>
            {status} <RoadCount>{count}</RoadCount>
          </RoadLi>
        ))}
      </ul>
    </StatusContainer>
  );
};
export default RoadMapMenu;
