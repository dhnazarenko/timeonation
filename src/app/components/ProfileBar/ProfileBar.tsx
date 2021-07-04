import React from 'react';
import styles from './ProfileBar.module.css';

type LinkProps = {
  label: string;
  details: string;
};

function ProfileBar({ label, details }: LinkProps): JSX.Element {
  return (
    <div className={styles.container}>
      <p className={styles.label}>{label}</p>
      <p className={styles.details}>{details}</p>
    </div>
  );
}

export default ProfileBar;
