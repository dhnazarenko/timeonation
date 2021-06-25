import React from 'react';
import Main from './Main';
import { Meta } from '@storybook/react';

export default {
  title: 'Page/Main',
  Component: 'Main',
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default = (): JSX.Element => <Main />;
