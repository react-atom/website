import Link from 'next/link';
import { GITHUB_URL } from '../../constants';
import { Atom } from '../Atom';
import { Logo } from './Logo';

export const Header = () => {
  return (
    <Atom position="sticky" top={0} bg="white" zIndex="header">
      <Atom h="8x" px="3x" flex={{ justify: 'space-between', align: 'center' }}>
        <Link passHref href="/">
          <Atom flex={{ align: 'center', gap: '1x' }} cursor="pointer">
            <Logo />
            <Atom fontSize="title1" fontWeight="semiBold" c="primary">
              React Atom
            </Atom>
          </Atom>
        </Link>
        <Atom flex={{ align: 'center', gap: '3x' }} fontSize="title3" fontWeight="medium">
          <Link passHref href="/get-started">
            <Atom cursor="pointer">Get started</Atom>
          </Link>
          <Link passHref href={GITHUB_URL}>
            <Atom cursor="pointer">Github</Atom>
          </Link>
        </Atom>
      </Atom>
      <Atom w="fill" h={1} bg="border" />
    </Atom>
  );
};
