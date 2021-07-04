import React from 'react';
import styles from './SearchField.module.css';

type LabeledInputProps = {
  icon: React.SVGProps<SVGSVGElement>;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
};

function SearchField({
  icon,
  placeholder,
  value,
  onChange,
}: LabeledInputProps): JSX.Element {
  return (
    <div>
      <label className={styles.container}>
        <span className={styles.container__icon}>{icon}</span>
        <input
          className={styles.container__input}
          placeholder={placeholder}
          value={value}
          onChange={(event) => onChange(event.target.value)}
        />
      </label>
    </div>
  );
}

export default SearchField;
