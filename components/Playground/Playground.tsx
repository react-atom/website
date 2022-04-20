import { PLAYGROUND_URL } from '../../constants';
import { Atom, AtomProps } from '../Atom';

export const Playground = (atomProps: AtomProps) => {
  return (
    <Atom flex flexDirection="column" flexAlign="center" gap="1x" {...atomProps}>
      <Atom c="textSecondary">{"Notice: playground don't support autocomplete yet."}</Atom>
      <Atom
        as="iframe"
        mt="1x"
        w="fill"
        h={600}
        bg="white"
        border="none"
        src={PLAYGROUND_URL}
        title="@react-atom"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
      />
    </Atom>
  );
};
