import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import LabeledInput from './LabeledInput';
import UserIcon from '../Icons/UserIcon';

test('renders labeled input field', () => {
  render(
    <LabeledInput
      icon={<UserIcon />}
      placeholder="Hello"
      value=""
      onChange={jest.fn()}
    />
  );
  expect(screen.getByRole('textbox')).toHaveProperty('placeholder', 'Hello');
});

test('calls onChange with value', () => {
  const handleChange = jest.fn();
  render(
    <LabeledInput
      icon={<UserIcon />}
      placeholder="Keyword..."
      value=""
      onChange={handleChange}
    />
  );

  fireEvent.change(screen.getByRole('textbox'), { target: { value: 'cars' } });
  expect(handleChange).toBeCalledWith('cars');
});
