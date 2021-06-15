import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

test('renders Login Button', () => {
  render(<Button>Login</Button>);
  expect(screen.getByRole('button').innerHTML).toBe('Login');
});

test('calls onClick', () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick}>Click me!</Button>);

  fireEvent.click(screen.getByRole('button'));

  expect(handleClick).toBeCalled();
});
