import { Pagination } from '@tal-test/pagination';
import type { PaginationProps } from '@tal-test/pagination';
import { Button } from '@tal-test/button';
import { ColorBox } from '@tal-test/color-box';
import { useState, useCallback } from 'react';
/* eslint-disable-next-line */
export interface InternalJarvisRoutesProps {}

export function InternalJarvisRoutes(props: InternalJarvisRoutesProps) {
  const [page, setPage] = useState(0);
  const onChangePage: PaginationProps['onChangePage'] = useCallback(
    (e, p) => {
      setPage(p);
    },
    [setPage]
  );

  return (
    <div>
      <h1>This is a page from libs!</h1>
      <Pagination
        count={100}
        rowsPerPage={25}
        page={page}
        onChangePage={onChangePage}
      />
      <Button />
      <ColorBox color="#00FF00" />
    </div>
  );
}

export default InternalJarvisRoutes;
