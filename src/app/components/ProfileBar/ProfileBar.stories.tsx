import React from 'react';
import ProfileBar from './ProfileBar';

export default {
  title: 'Component/ProfileBar',
  component: ProfileBar,
};

export const Username = (): JSX.Element => (
  <ProfileBar label="Benutzername" details="Deejay" />
);

export const Email = (): JSX.Element => (
  <ProfileBar label="Email" details="test@web.de" />
);
