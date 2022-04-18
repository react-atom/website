import Head from 'next/head';
import { Atom } from '../components/Atom';
import { Header } from '../components/Header';

const PageGetStarted = () => {
  return (
    <Atom fontFamily="default" fontSize="default" lineHeight="default" c="text" minH="100vh" bg="background">
      <Head>
        <title>React Atom - Get started</title>
      </Head>
      <Header />
      <Atom w="fill" h={300} flex flexDirection="column" flexJustify="center" flexAlign="center" gap="1x">
        <Atom fontSize="title1" fontWeight="semiBold">
          In process
        </Atom>
        <Atom c="textSecondary">Coming soon...</Atom>
      </Atom>
    </Atom>
  );
};

export default PageGetStarted;
