import { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { StatusContainer, StatusMapTitle, TitleContainer } from './StatusMap.styled';
const Li = styled.li`
  display: flex;
  justify-content: space-between;
`;

const RoadMap: FC = () => {
  return (
    <StatusContainer>
      <TitleContainer>
        <StatusMapTitle>Roadmap</StatusMapTitle>
        <Link to="/view">View</Link>
      </TitleContainer>

      <ul>
        <Li>
          <span>Planned</span>
          <span>3</span>
        </Li>
        <Li>
          <span>In-progress</span>
          <span>2</span>
        </Li>
        <Li>
          <span>Live</span>
          <span>1</span>
        </Li>
      </ul>
    </StatusContainer>
  );
};
export default RoadMap;
