import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './Button';

test('renders Login Button', () => {
  render(<Button>Login</Button>);
  expect(screen.getByRole('button').innerHTML).toBe('Login');
});
