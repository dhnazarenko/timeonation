import React from 'react';
import Avatar from './Avatar';

export default {
  title: 'Component/Avatar',
  component: Avatar,
};

export const User = (): JSX.Element => (
  <Avatar link="profile" imageSrc="/user-placeholder.png" />
);
export const Daniel = (): JSX.Element => (
  <Avatar link="profile" imageSrc="/daniel.jpg" />
);
