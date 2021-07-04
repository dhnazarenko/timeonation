import React from 'react';
import Profile from './Profile';
import { Meta } from '@storybook/react';

export default {
  title: 'Page/Profile',
  Component: 'Profile',
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default = (): JSX.Element => <Profile />;
