import { ReactNode } from 'react';
import { Atom } from '../Atom';
import { Header } from '../Header';
import { LeftMenus } from '../Menus';

type DocContainerProps = {
  children?: ReactNode;
};

export const DocContainer = (props: DocContainerProps) => {
  const { children } = props;

  return (
    <>
      <Header />
      <Atom w="visibleWidth" mx="auto" flex>
        <Atom flexShrink={0}>
          <LeftMenus />
        </Atom>
        <Atom flexGrow={1}>{children}</Atom>
        <Atom w="leftMenu" flexShrink={0} />
      </Atom>
    </>
  );
};
