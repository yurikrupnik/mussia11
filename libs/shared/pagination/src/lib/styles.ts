import { makeStyles } from '@material-ui/core/styles';

const createClasses = makeStyles((theme) => {
  const paginationHoverAndSelected = {
    background: theme.palette.info.main,
    color: theme.palette.common.white,
  };
  return {
    root: {
      display: 'flex',
      justifyContent: 'center',
    },
    ul: {
      listStyle: 'none',
      padding: 0,
      display: 'flex',
      margin: theme.spacing(0, 0, 0, 1),
    },
    paginationButton: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: theme.palette.common.white,
      // border: `1px solid ${theme.palette.primary[0]}`,
      border: `1px solid ${theme.palette.primary.light}`,
      borderRadius: theme.spacing(0.5),
      padding: 0,
      color: theme.palette.primary.main,
      width: '24px',
      height: '24px',
      cursor: 'pointer',
      '&:hover': paginationHoverAndSelected,
      transition: 'background-color .2s, color .2s',
    },
    paginationButtonSelected: paginationHoverAndSelected,
    displayNone: {
      display: 'none',
    },
    marginRight2: {
      marginRight: theme.spacing(0.25),
    },
    marginLeft2: {
      marginLeft: theme.spacing(0.25),
    },
    toolbar: {
      padding: 0,
      minHeight: 0,
    },
    caption: {
      // ...theme.typography.caption1,
      ...theme.typography.caption,
      color: theme.palette.grey[500],
    },
  };
});

export default createClasses;
