import Link from 'next/link';
import { Atom } from '../Atom';
import { TopMenus } from '../Menus';
import { Logo } from './Logo';

export const Header = () => {
  return (
    <Atom position="sticky" top={0} bg="white" zIndex="header">
      <Atom w="visibleWidth" mx="auto" h="8x" px="3x" flex flexJustify="space-between" flexAlign="center">
        <Link passHref href="/">
          <Atom flex flexAlign="center" gap="1x" cursor="pointer">
            <Logo />
            <Atom fontSize="title1" fontWeight="semiBold" c="primary">
              React Atom
            </Atom>
          </Atom>
        </Link>
        <TopMenus />
      </Atom>
      <Atom w="fill" h={1} bg="border" />
    </Atom>
  );
};
