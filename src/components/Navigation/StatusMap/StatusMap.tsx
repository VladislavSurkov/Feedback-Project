import { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { StatusContainer } from './StatusMap.styled';
const Li = styled.li`
  display: flex;
  justify-content: space-between;
`;

const RoadMap: FC = () => {
  return (
    <StatusContainer
     
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <h3>Roadmap</h3>
        <Link to="/view">View</Link>
      </div>

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
