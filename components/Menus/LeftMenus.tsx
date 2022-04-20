import Link from 'next/link';
import { useRouter } from 'next/router';
import { LEFT_MENUS } from '../../constants';
import { Atom } from '../Atom';

export const LeftMenus = () => {
  const router = useRouter();

  return (
    <Atom py="4x" w="leftMenu" flex flexDirection="column" gap="2x">
      {LEFT_MENUS.map((menu) => (
        <Atom key={menu.title}>
          <Atom fontSize="title3" fontWeight="semiBold">
            {menu.title}
          </Atom>
          <Atom my="2x" flex flexDirection="column" gap="1x">
            {menu.subMenus.map((subMenu) => {
              const isActive = subMenu.url === router.pathname;
              return (
                <Link key={subMenu.title} passHref href={subMenu.url}>
                  <Atom cursor="pointer" c={isActive ? 'text' : 'textSecondary'} fontWeight={isActive && 'medium'}>
                    {subMenu.title}
                  </Atom>
                </Link>
              );
            })}
          </Atom>
        </Atom>
      ))}
    </Atom>
  );
};
