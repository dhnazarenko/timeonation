import React from 'react';
import { render, screen } from '@testing-library/react';
import LabeledInput from './LabeledInput';
import UserIcon from '../Icons/UserIcon';

test('renders Label input field', () => {
  render(
    <LabeledInput
      icon={<UserIcon />}
      placeholder="Benutzername"
      value=""
      required
      onChange={console.log}
    />
  );
  expect(screen.getByPlaceholderText('Benutzername'));
});
