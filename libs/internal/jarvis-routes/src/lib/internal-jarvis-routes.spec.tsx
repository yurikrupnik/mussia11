import { render } from '@testing-library/react';

import InternalJarvisRoutes from './internal-jarvis-routes';

describe('InternalJarvisRoutes', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<InternalJarvisRoutes />);
    expect(baseElement).toBeTruthy();
  });
});
