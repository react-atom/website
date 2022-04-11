import { PLAYGROUND_URL } from '../../constants';
import { Atom, AtomProps } from '../Atom';

export const Playground = (atomProps: AtomProps) => {
  return (
    <Atom
      as="iframe"
      w="fill"
      h={600}
      bg="white"
      border="none"
      src={PLAYGROUND_URL}
      title="@react-atom"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
      {...atomProps}
    />
  );
};
