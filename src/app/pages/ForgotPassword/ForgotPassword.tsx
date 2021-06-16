import React, { useState } from 'react';
import BackButton from '../../components/BackButton/BackButton';
import Button from '../../components/Button/Button';
import EmailIcon from '../../components/Icons/EmailIcon';
import LabeledInput from '../../components/LabeledInput/LabeledInput';
import styles from './ForgotPassword.module.css';

function ForgotPassword(): JSX.Element {
  const [email, setEmail] = useState('');

  return (
    <div className={styles.container}>
      <header>
        <BackButton />
      </header>
      <main className={styles.main}>
        <h1 className={styles.main__headline}>Passwort vergessen?</h1>
        <p className={styles.main__intro}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis,
        </p>
        <form className={styles.form}>
          <LabeledInput
            icon={<EmailIcon />}
            type="email"
            placeholder="E-mail"
            value={email}
            required
            onChange={setEmail}
          />
          <div>
            <Button>Zurücksetzen</Button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default ForgotPassword;
