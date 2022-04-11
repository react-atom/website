import atom from '@react-atom/style';
import { TOKENS } from '../../constants';

export const Atom = atom(TOKENS);

export type AtomProps = Parameters<typeof Atom>[0];
