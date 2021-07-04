import React from 'react';
import SearchIcon from '../Icons/SearchIcon';
import SearchField from './SearchField';

export default {
  title: 'Component/SearchField',
  component: SearchField,
};

export const username = (): JSX.Element => (
  <SearchField
    icon={<SearchIcon />}
    placeholder="Suche"
    value=""
    onChange={console.log}
  />
);
