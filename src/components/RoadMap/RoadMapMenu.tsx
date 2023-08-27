import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useTypedSelector } from 'hooks/useHooks';

import {
  StatusContainer,
  StatusMapTitle,
  TitleContainer,
  RoadLi,
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
        <Link to="/roadmap">View</Link>
      </TitleContainer>

      <ul>
        {Object.entries(statusCounts).map(([status, count]) => (
          <RoadLi key={status}>
            {status}: {count}
          </RoadLi>
        ))}
      </ul>
    </StatusContainer>
  );
};
export default RoadMapMenu;
