import { forwardRef } from 'react';
import { Atom, AtomProps } from '../Atom';

const BUTTON_VARIOUS = {
  primary: {
    c: 'white',
    bg: 'primary',
  },
  secondary: {
    borderStyle: 'solid',
    borderColor: 'primary',
    borderWidth: 2,
    c: 'primary',
    bg: 'white',
  },
};

type ButtonProps = {
  various: keyof typeof BUTTON_VARIOUS;
} & AtomProps;

export const Button = forwardRef<HTMLElement, ButtonProps>((props, ref) => {
  const { various, children, ...atomProps } = props;

  return (
    <Atom px="3x" py="1x" boxSizing="border-box" cursor="pointer" {...BUTTON_VARIOUS[various]} {...atomProps} ref={ref}>
      {children}
    </Atom>
  );
});
