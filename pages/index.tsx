import Head from 'next/head';
import Link from 'next/link';
import { Atom } from '../components/Atom';
import { Button } from '../components/Button';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Playground } from '../components/Playground';
import { GITHUB_URL } from '../constants';

const PageIndex = () => {
  return (
    <Atom fontFamily="default" fontSize="default" lineHeight="default" c="text" minH="100vh" bg="background">
      <Head>
        <title>React Atom - Build your application atomic by your design</title>
      </Head>
      <Header />
      <Atom h={310} bg="white" flex={{ direction: 'column', justify: 'center', align: 'center' }} position="relative">
        <Atom fontSize="big" fontWeight="bold">
          React Atom
        </Atom>
        <Atom mt="1x" c="textSecondary">
          Build your application atomic with your design!
        </Atom>
        <Atom mt="4x" fontSize="title3" fontWeight="semiBold" textAlign="center" flex={{ gap: '3x' }}>
          <Link passHref href="/get-started">
            <Button various="primary" w={200}>
              Get started
            </Button>
          </Link>
          <Link passHref href={GITHUB_URL}>
            <Button various="secondary" w={200}>
              Github
            </Button>
          </Link>
        </Atom>
        <Atom position="absolute" top={0} right="8x" h="fill" flex={{ align: 'center' }}>
          <Atom w={160} h={160} borderRadius="50%" bg="primary" opacity="8%" />
          <Atom ml={-60} w={200} h={200} borderRadius="50%" bg="primary" opacity="5%" />
        </Atom>
      </Atom>
      <Atom w="80%" mx="auto" py="8x" grid={{ columns: 3, gap: ['2x', '4x'] }}>
        <Atom fontSize="title1" fontWeight="semiBold">
          Simple & Efficient
        </Atom>
        <Atom fontSize="title1" fontWeight="semiBold">
          Customization
        </Atom>
        <Atom fontSize="title1" fontWeight="semiBold">
          Compatibility
        </Atom>
        <Atom c="textSecondary">
          No special configuration, you can use it out of the box, fewer styling components, autocomplete support,
          support for popular css attributes, allowing you to develop applications faster and more efficiently.
        </Atom>
        <Atom c="textSecondary">
          You can customize your design tokens such as color, spacing, font family, font size, line height, border,
          shadow ... and of course you can customize your own set of tokens to make sure your application is all one
          style.
        </Atom>
        <Atom c="textSecondary">
          You can use @react-atom/style without any dependencies (base on react build-in style),
          @react-atom/styled-components based on styled-components, and @react-atom/emotion based on emotion.
        </Atom>
      </Atom>
      <Atom w="80%" mx="auto" flex={{ direction: 'column', align: 'center' }}>
        <Atom fontSize="title1" fontWeight="semiBold">
          Playground
        </Atom>
        <Playground mt="2x" />
      </Atom>
      <Footer />
    </Atom>
  );
};

export default PageIndex;
