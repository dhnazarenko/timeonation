import React from 'react';
import styles from './LabeledInput.module.css';

type LabeledInputProps = {
  icon: React.SVGProps<SVGSVGElement>;
  placeholder: string;
  value: string;
  type?: string;
  required?: boolean;
  onChange: (value: string) => void;
};

function LabeledInput({
  icon,
  placeholder,
  value,
  type,
  required,
  onChange,
}: LabeledInputProps): JSX.Element {
  return (
    <label className={styles.container}>
      <span className={styles.container__icon}>{icon}</span>
      <input
        className={styles.container__input}
        type={type}
        placeholder={placeholder}
        value={value}
        required={required}
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  );
}

export default LabeledInput;
