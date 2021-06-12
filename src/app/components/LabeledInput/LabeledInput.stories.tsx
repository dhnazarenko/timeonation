import React from 'react';
import LabeledInput from './LabeledInput';
import UserIcon from '../Icons/UserIcon';
import PasswordIcon from '../Icons/PasswordIcon';
import EmailIcon from '../Icons/EmailIcon';
import CategoryIcon from '../Icons/CategoryIcon';
import LocationIcon from '../Icons/LocationIcon';
import SearchIcon from '../Icons/SearchIcon';

export default {
  title: 'Component/LabeledInput',
  component: LabeledInput,
};

export const username = (): JSX.Element => (
  <LabeledInput
    icon={<UserIcon />}
    placeholder="Benutzername"
    value=""
    required={true}
    onChange={console.log}
  />
);

export const password = (): JSX.Element => (
  <LabeledInput
    icon={<PasswordIcon />}
    placeholder="Passwort"
    value=""
    required={true}
    onChange={console.log}
  />
);

export const email = (): JSX.Element => (
  <LabeledInput
    icon={<EmailIcon />}
    placeholder="E-mail"
    value=""
    required={true}
    onChange={console.log}
  />
);

export const category = (): JSX.Element => (
  <LabeledInput
    icon={<CategoryIcon />}
    placeholder="Kategorie"
    value=""
    required={true}
    onChange={console.log}
  />
);

export const Location = (): JSX.Element => (
  <LabeledInput
    icon={<LocationIcon />}
    placeholder="Ort"
    value=""
    required={true}
    onChange={console.log}
  />
);

export const Search = (): JSX.Element => (
  <LabeledInput
    icon={<SearchIcon />}
    placeholder="Ort"
    value=""
    required={true}
    onChange={console.log}
  />
);
