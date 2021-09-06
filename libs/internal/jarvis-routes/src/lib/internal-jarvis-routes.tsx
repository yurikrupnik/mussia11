import { Pagination } from '@mussia11/pagination';
import type { PaginationProps } from '@mussia11/pagination';
import { Button } from '@mussia11/shared-button';
import { ColorBox } from '@mussia11/shared-color-box';
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
