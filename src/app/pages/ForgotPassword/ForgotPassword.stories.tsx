import React from 'react';
import ForgotPassword from './ForgotPassword';
import { Meta } from '@storybook/react';

export default {
  title: 'Page/ForgotPassword',
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default = (): JSX.Element => <ForgotPassword />;
