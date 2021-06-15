import React, { useState } from 'react';
import Button from '../../components/Button/Button';
import PasswordIcon from '../../components/Icons/PasswordIcon';
import UserIcon from '../../components/Icons/UserIcon';
import LabeledInput from '../../components/LabeledInput/LabeledInput';
import styles from './Login.module.css';

function Login(): JSX.Element {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    alert(`Login with ${username}:${password}`);
  }

  return (
    <div className={styles.container}>
      <header>
        <h1 className={styles.header__headline}>Willkommen bei Timeonation</h1>
      </header>
      <main>
        <form onSubmit={handleSubmit} className={styles.form}>
          <p className={styles.form__headline}>
            Melde dich mit deinen Daten an
          </p>
          <div>
            <LabeledInput
              icon={<UserIcon />}
              type="text"
              placeholder="Benutzername"
              value={username}
              required
              onChange={setUsername}
            />
          </div>
          <div>
            <LabeledInput
              icon={<PasswordIcon />}
              type="password"
              placeholder="Passwort"
              value={password}
              required
              onChange={setPassword}
            />
          </div>
          <div className={styles.form__button}>
            <Button>Anmelden</Button>
          </div>
        </form>
      </main>
      <footer>
        <p className={styles.footer__link}>
          Du hast keinen Account? <a href="#">Erstellen</a>
        </p>
      </footer>
    </div>
  );
}

export default Login;
