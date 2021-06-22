import React from 'react';
import styles from './NavigationBar.module.css';
import NavigationLink from '../NavigationLink/NavigationLink';
import { useLocation } from 'react-router-dom';
import HomeIcon from '../Icons/HomeIcon';
import NavUserIcon from '../Icons/NavUserIcon';
import NavSearchIcon from '../Icons/NavSearchIcon';

export default function NavBar(): JSX.Element {
  const location = useLocation();
  const activePath: string = location.pathname;

  return (
    <div className={styles.navigationBar}>
      <NavigationLink
        active={activePath === '/home'}
        icon={<HomeIcon />}
        link="/home"
      />
      <NavigationLink
        active={activePath === '/search'}
        icon={<NavSearchIcon />}
        link="/search"
      />
      <NavigationLink
        active={activePath === '/profile'}
        icon={<NavUserIcon />}
        link="/profile"
      />
    </div>
  );
}
