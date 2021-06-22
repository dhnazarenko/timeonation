import React from 'react';
import HomeIcon from '../Icons/HomeIcon';
import NavSearchIcon from '../Icons/NavSearchIcon';
import NavUserIcon from '../Icons/NavUserIcon';
import NavigationLink from './NavigationLink';

export default {
  title: 'Component/NavigationLink',
  component: NavigationLink,
};

export const Home = (): JSX.Element => (
  <NavigationLink active={false} icon={<HomeIcon />} link="home" />
);
export const Search = (): JSX.Element => (
  <NavigationLink active={false} icon={<NavSearchIcon />} link="search" />
);
export const UserProfile = (): JSX.Element => (
  <NavigationLink active={false} icon={<NavUserIcon />} link="profile" />
);
