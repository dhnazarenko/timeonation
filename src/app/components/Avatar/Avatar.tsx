import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Avatar.module.css';

type AvatarProps = {
  imageSrc: string;
  link: string;
};

function Avatar({ imageSrc, link }: AvatarProps): JSX.Element {
  return (
    <Link to={link}>
      <img src={imageSrc} className={styles.img} />
    </Link>
  );
}

export default Avatar;
