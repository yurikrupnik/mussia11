import React, { useCallback, useState } from 'react';
import { cleanup, render } from '@testing-library/react';
import { Pagination } from '../pagination';

afterEach(cleanup);

const Wrapper = () => {
  const [page, setPage] = useState(0);
  const handleChangePage = useCallback((e, newPage) => setPage(newPage), []);

  return (
    <Pagination
      page={page}
      count={100}
      rowsPerPage={10}
      onChangePage={handleChangePage}
    />
  );
};

it(`Should render Pagination and move through pages correctly`, () => {
  const text1 = '1-10 of 100 results';
  const text2 = '11-20 of 100 results';
  const text3 = '51-60 of 100 results';

  const { queryByText, queryByTestId } = render(<Wrapper />);

  let elm = queryByText(text1);
  expect(elm?.innerHTML).toContain(text1);

  const buttonElm = queryByTestId('nextButton');
  buttonElm?.click();

  elm = queryByText(text2);
  expect(elm?.innerHTML).toContain(text2);

  let ellipsisButton = queryByTestId('end-ellipsis');
  ellipsisButton?.click();
  elm = queryByText(text3);
  expect(elm?.innerHTML).toContain(text3);

  ellipsisButton = queryByTestId('start-ellipsis');
  ellipsisButton?.click();
  elm = queryByText(text2);
  expect(elm?.innerHTML).toContain(text2);
});
