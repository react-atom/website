import { Atom } from '../Atom';

export const DocInProcess = () => {
  return (
    <Atom w="fill" h={300} flex flexDirection="column" flexJustify="center" flexAlign="center" gap="1x">
      <Atom fontSize="title1" fontWeight="semiBold">
        In process
      </Atom>
      <Atom c="textSecondary">Coming soon...</Atom>
    </Atom>
  );
};
