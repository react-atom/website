import { Atom, AtomProps } from '../Atom';

export const Footer = (atomProps: AtomProps) => {
  return (
    <Atom c="textSecondary" pt="8x" pb="4x" width="fill" textAlign="center" {...atomProps}>
      build with ❤️ by @react-atom
    </Atom>
  );
};
