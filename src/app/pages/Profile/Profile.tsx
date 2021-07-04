import React from 'react';
import Avatar from '../../components/Avatar/Avatar';
import Button from '../../components/Button/Button';
import ProfileBar from '../../components/ProfileBar/ProfileBar';
import styles from './Profile.module.css';

function Main(): JSX.Element {
  return (
    <div className={styles.container}>
      <h1 className={styles.headline}>
        Hi!
        <br />
        Max Muster
      </h1>
      <div className={styles.avatar}>
        <Avatar imageSrc="./daniel.jpg" link="#" />
      </div>
      <div className={styles.details}>
        <ProfileBar label="Benutzername" details="Max Muster" />
        <ProfileBar label="E-mail" details="maxmuster@gmail.com" />
        <ProfileBar label="Angesehen" details="13 Videos" />
        <ProfileBar label="Dadurch gespendet" details="6.40 €" />
      </div>
      <div className={styles.button_container}>
        <Button>Abmelden</Button>
      </div>
    </div>
  );
}

export default Main;
