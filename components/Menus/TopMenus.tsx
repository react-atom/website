import Link from 'next/link';
import { TOP_MENUS } from '../../constants';
import { Atom } from '../Atom';

export const TopMenus = () => {
  return (
    <Atom flex flexAlign="center" gap="3x" fontSize="title3" fontWeight="medium">
      {TOP_MENUS.map((menu) => (
        <Link key={menu.title} passHref href={menu.url}>
          <Atom cursor="pointer">{menu.title}</Atom>
        </Link>
      ))}
    </Atom>
  );
};
