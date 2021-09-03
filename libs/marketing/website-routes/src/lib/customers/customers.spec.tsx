import { render } from '@testing-library/react';

import { Customers } from './customers';

describe('Customer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Customers />);
    expect(baseElement).toBeTruthy();
  });
});
