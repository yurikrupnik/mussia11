import React, {
  MouseEvent as ReactMouseEvent,
  memo,
  useCallback,
  useMemo,
} from 'react';
import Grid from '@material-ui/core/Grid';
import TablePagination, {
  TablePaginationProps,
} from '@material-ui/core/TablePagination';
import { usePagination } from '@material-ui/lab/Pagination';
import { TablePaginationActionsProps } from '@material-ui/core/TablePagination/TablePaginationActions';
import ChevronLeftRoundedIcon from '@material-ui/icons/ChevronLeftRounded';
import ChevronRightRoundedIcon from '@material-ui/icons/ChevronRightRounded';
import Box from '@material-ui/core/Box';
import clsx from 'clsx';
import createClasses from './styles';

type PaginationComponentProps = TablePaginationActionsProps &
  TablePaginationProps;

const PaginationComponent = memo((props: PaginationComponentProps) => {
  const classes = createClasses({});

  const { count, page, rowsPerPage, onPageChange } = props;
  const { items } = usePagination({
    count: Math.ceil(count / rowsPerPage),
    // eslint-disable-next-line
    onChange: (e: any, pageNumber) => onPageChange(e, pageNumber - 1), // Mui types dont corelate
    page: page + 1,
  });

  const itemsIds = useMemo(() => items.map(() => Math.random()), [items]);
  const handleEllipsisClick = useCallback(
    (state) => (e: ReactMouseEvent<HTMLButtonElement, MouseEvent>) =>
      onPageChange(e, page + (state === 'next' ? 4 : -4)),
    [onPageChange, page]
  );

  return (
    <Box component="nav">
      <Box component="ul" className={classes.ul}>
        {items.map(({ page: itemPage, type, selected, ...item }, index) => {
          let children = null;

          switch (type) {
            case 'start-ellipsis':
            case 'end-ellipsis':
              children = (
                <button
                  className={`${classes.paginationButton} ${classes.marginLeft2} ${classes.marginRight2}`}
                  type="button"
                  onClick={handleEllipsisClick(
                    type === 'end-ellipsis' ? 'next' : 'previous'
                  )}
                  data-testid={type}
                >
                  …
                </button>
              );
              break;
            case 'page':
              children = (
                <button
                  type="button"
                  className={`${classes.paginationButton} ${
                    classes.marginLeft2
                  } ${classes.marginRight2} ${
                    selected ? classes.paginationButtonSelected : ''
                  }`}
                  {...item} // eslint-disable-line
                >
                  {itemPage}
                </button>
              );
              break;
            case 'previous':
              children = (
                <button
                  data-testid="previousButton"
                  type="button"
                  className={`${classes.paginationButton} ${classes.marginRight2}`}
                  {...item} // eslint-disable-line
                >
                  <ChevronLeftRoundedIcon />
                </button>
              );
              break;
            case 'next':
              children = (
                <button
                  data-testid="nextButton"
                  data-cy="nextButton"
                  type="button"
                  className={`${classes.paginationButton} ${classes.marginLeft2}`}
                  {...item} // eslint-disable-line
                >
                  <ChevronRightRoundedIcon />
                </button>
              );
              break;

            default:
          }

          return (
            <Grid item component="li" key={itemsIds[index]}>
              {children}
            </Grid>
          );
        })}
      </Box>
    </Box>
  );
});

export interface PaginationProps {
  /**
   * Current page, starts count from 0
   */
  page: number;
  onChangePage: TablePaginationProps['onPageChange'];
  count: number;
  rowsPerPage: number;
  classes?: Partial<ReturnType<typeof createClasses>>;
}

// Change component in case we will use it for the table as well
const Pagination = (props: PaginationProps) => {
  const { page, onChangePage, count, rowsPerPage, classes } = props;
  const styles = createClasses();

  const labelDisplayedRows: TablePaginationProps['labelDisplayedRows'] =
    useCallback(
      ({ from, to, count: curCount }) => `${from}-${to} of ${curCount} results`,
      []
    );

  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <TablePagination
      component="div"
      classes={{
        root: clsx(styles.root, classes?.root),
        spacer: clsx(styles.displayNone, classes?.displayNone),
        toolbar: clsx(styles.toolbar, classes?.toolbar),
        caption: clsx(styles.caption, classes?.caption),
      }}
      rowsPerPageOptions={[0]}
      ActionsComponent={PaginationComponent}
      count={count}
      rowsPerPage={rowsPerPage}
      page={page}
      onPageChange={onChangePage}
      labelDisplayedRows={labelDisplayedRows}
      labelRowsPerPage="Rows per page"
    />
  );
};

Pagination.defaultProps = {
  classes: {},
};

const m = memo(Pagination);
export { m as Pagination };
