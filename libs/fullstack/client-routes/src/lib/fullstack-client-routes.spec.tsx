import { render } from '@testing-library/react';

import FullstackClientRoutes from './fullstack-client-routes';

describe('FullstackClientRoutes', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FullstackClientRoutes />);
    expect(baseElement).toBeTruthy();
  });
});
