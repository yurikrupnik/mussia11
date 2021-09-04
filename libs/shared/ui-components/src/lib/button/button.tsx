import { ReactChildren } from 'react';
import MuiButton from '@material-ui/core/Button';
import './button.module.css';

/* eslint-disable-next-line */
export interface ButtonProps {
  children: ReactChildren | string;
  // onClick: Function;
}

export function Button(props: ButtonProps) {
  const { children } = props;
  return <MuiButton onClick={() => console.log('aris')}>{children}</MuiButton>;
}
