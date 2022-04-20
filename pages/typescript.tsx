import Head from 'next/head';
import { Atom } from '../components/Atom';
import { DocContainer, DocInProcess } from '../components/DocContainer';

const PageTypescript = () => {
  return (
    <Atom fontFamily="default" fontSize="default" lineHeight="default" c="text" minH="100vh" bg="background">
      <Head>
        <title>React Atom - Typescript</title>
      </Head>
      <DocContainer>
        <DocInProcess />
      </DocContainer>
    </Atom>
  );
};

export default PageTypescript;
