import { Route, Link } from 'react-router-dom';

import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface SidebarProps {}

const StyledSidebar = styled.div`
  color: darkgreen;
`;

export function Sidebar(props: SidebarProps) {
  return (
    <StyledSidebar>
      <h1>Welcome to Sidebar!</h1>

      {/*<ul>*/}
      {/*  <li>*/}
      {/*    <Link to="/">sidebar root</Link>*/}
      {/*  </li>*/}
      {/*</ul>*/}
      {/*<Route*/}
      {/*  path="/"*/}
      {/*  render={() => <div>This is the sidebar root route.</div>}*/}
      {/*/>*/}
    </StyledSidebar>
  );
}

export default Sidebar;
