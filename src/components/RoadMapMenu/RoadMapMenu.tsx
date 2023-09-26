import { FC } from 'react';
import { useAppDispatch, useTypedSelector } from 'hooks/useHooks';
import { setSidebar } from 'redux/modal/modal-slice';
import { getStatusCounts } from 'helpers/sorting/sortStatus';
import {
  StatusContainer,
  StatusMapTitle,
  StatusMapLink,
  TitleContainer,
  RoadLi,
  RoadCount,
} from './RoadMapMenu.styled';



const RoadMapMenu: FC = () => {
  const dispatch = useAppDispatch();
  const { products } = useTypedSelector(state => state.todo);

  const statusCounts = getStatusCounts(products);

  return (
    <StatusContainer>
      <TitleContainer>
        <StatusMapTitle>Roadmap</StatusMapTitle>
        <StatusMapLink
          onClick={() => dispatch(setSidebar(false))}
          to="/roadmap"
        >
          View
        </StatusMapLink>
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
