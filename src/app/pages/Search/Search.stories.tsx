import { Meta } from '@storybook/react';
import React from 'react';
import Search from './Search';

export default {
  title: 'Page/Search',
  Component: 'Search',
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default = (): JSX.Element => <Search />;
