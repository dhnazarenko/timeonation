import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { User } from '../../../types';
import { postLoginUser } from '../../../utils/api';
import Button from '../../components/Button/Button';
import PasswordIcon from '../../components/Icons/PasswordIcon';
import UserIcon from '../../components/Icons/UserIcon';
import LabeledInput from '../../components/LabeledInput/LabeledInput';
import styles from './Login.module.css';

function Login(): JSX.Element {
  const history = useHistory();
  const [username, checkUsername] = useState('');
  const [password, checkPassword] = useState('');

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const user: Partial<User> = { username, password };
    await postLoginUser(user);
    history.push('/register');
  }

  return (
    <div className={styles.container}>
      <header>
        <h1 className={styles.header__headline}>Willkommen bei Timeonation</h1>
      </header>
      <main>
        <form onSubmit={handleSubmit} className={styles.form}>
          <p className={styles.form__intro}>Melde dich mit deinen Daten an</p>
          <LabeledInput
            icon={<UserIcon />}
            type="text"
            placeholder="Benutzername"
            value={username}
            required
            onChange={checkUsername}
          />
          <LabeledInput
            icon={<PasswordIcon />}
            type="password"
            placeholder="Passwort"
            value={password}
            required
            onChange={checkPassword}
          />
          <div className={styles.form__button_container}>
            <Button>Anmelden</Button>
          </div>
        </form>
      </main>
      <footer>
        <p className={styles.footer__link}>
          Du hast keinen Account? <a href="/register">Erstellen</a>
        </p>
      </footer>
    </div>
  );
}

export default Login;
