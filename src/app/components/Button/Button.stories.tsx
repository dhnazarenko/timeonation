import React from 'react';
import Button from './Button';

export default {
  title: 'Component/Button',
  component: Button,
};

export const LoginButton = (): JSX.Element => <Button>Login</Button>;

export const RegisterButton = (): JSX.Element => <Button>Register</Button>;
