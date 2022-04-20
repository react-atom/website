import { GITHUB_URL } from './github';

type Menu = {
  title: string;
  url: string;
};

export const TOP_MENUS: Menu[] = [
  {
    title: 'Get started',
    url: '/overview',
  },
  {
    title: 'Github',
    url: GITHUB_URL,
  },
];

export const LEFT_MENUS: { title: string; subMenus: Menu[] }[] = [
  {
    title: 'Getting Started',
    subMenus: [
      {
        title: 'Overview',
        url: '/overview',
      },
      {
        title: 'Installation',
        url: '/installation',
      },
      {
        title: 'Quick Start',
        url: '/quick-start',
      },
      {
        title: 'Comparison',
        url: '/comparison',
      },
      {
        title: 'TypeScript',
        url: '/typescript',
      },
      {
        title: 'React Native',
        url: '/react-native',
      },
    ],
  },
  {
    title: 'Guides & Concepts',
    subMenus: [
      {
        title: 'Supported CSS Properties',
        url: '/supported-css-properties',
      },
      {
        title: 'Make Your Component Atomic',
        url: '/make-your-component-atomic',
      },
    ],
  },
];
