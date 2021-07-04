import React from 'react';
import Details from './Details';
import { Meta } from '@storybook/react';

export default {
  title: 'Page/Details',
  Component: 'Details',
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default = (): JSX.Element => <Details />;
