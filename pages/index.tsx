import Head from 'next/head';
import { Atom } from '../components/Atom';

const PageIndex = () => {
  return (
    <Atom fontFamily="sans">
      <Head>
        <title>React Atom</title>
      </Head>
      <Atom mt="3x" textAlign="center" fontSize="3xl">
        Hello, React Atom!
      </Atom>
    </Atom>
  );
};

export default PageIndex;
