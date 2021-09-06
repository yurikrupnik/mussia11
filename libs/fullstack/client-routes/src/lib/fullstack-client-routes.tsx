import { Route, Link } from 'react-router-dom';

import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface FullstackClientRoutesProps {}

const StyledFullstackClientRoutes = styled.div`
  color: pink;
`;

export function FullstackClientRoutes(props: FullstackClientRoutesProps) {
  return (
    <StyledFullstackClientRoutes>
      <h1>Welcome to FullstackClientRoutes!</h1>

      <ul>
        <li>
          <Link to="/">fullstack-client-routes root</Link>
        </li>
      </ul>
      <Route
        path="/"
        render={() => (
          <div>This is the fullstack-client-routes root route.</div>
        )}
      />
    </StyledFullstackClientRoutes>
  );
}

export default FullstackClientRoutes;
