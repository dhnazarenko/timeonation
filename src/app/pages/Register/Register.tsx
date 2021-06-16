import React, { useState } from 'react';
import styles from './Register.module.css';
import EmailIcon from '../../components/Icons/EmailIcon';
import PasswordIcon from '../../components/Icons/PasswordIcon';
import UserIcon from '../../components/Icons/UserIcon';
import LabeledInput from '../../components/LabeledInput/LabeledInput';
import BackButton from '../../components/BackButton/BackButton';
import Button from '../../components/Button/Button';

function Register(): JSX.Element {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <div className={styles.container}>
      <header>
        <BackButton />
      </header>
      <main>
        <h1 className={styles.main__headline}>Erstelle einen Account</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
          <LabeledInput
            icon={<UserIcon />}
            type="text"
            placeholder="Benutzername"
            value={username}
            required
            onChange={setUsername}
          />
          <LabeledInput
            icon={<EmailIcon />}
            type="email"
            placeholder="E-mail"
            value={email}
            required
            onChange={setEmail}
          />
          <LabeledInput
            icon={<PasswordIcon />}
            type="password"
            placeholder="Passwort"
            value={password}
            required
            onChange={setPassword}
          />
          <LabeledInput
            icon={<PasswordIcon />}
            type="password"
            placeholder="Passwort best&auml;tigen"
            value={confirmPassword}
            required
            onChange={setConfirmPassword}
          />
          <div className={styles.form__button_container}>
            <Button>Erstellen</Button>
          </div>
        </form>
      </main>
      <footer>
        <p className={styles.footer__link}>
          Passwort vergessen? <a href="#">Anfordern</a>
        </p>
      </footer>
    </div>
  );
}

export default Register;
