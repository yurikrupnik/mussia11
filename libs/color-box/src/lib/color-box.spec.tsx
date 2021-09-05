import { render } from '@testing-library/react';

import ColorBox from './color-box';

describe('ColorBox', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ColorBox />);
    expect(baseElement).toBeTruthy();
  });
});
