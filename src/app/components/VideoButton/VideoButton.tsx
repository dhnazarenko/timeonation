import React from 'react';
import styles from './VideoButton.module.css';

type VideoButtonProps = {
  icon: React.SVGProps<SVGSVGElement>;
  buttonText: string;
  variant?: 'primary' | 'secondary';
};

function VideoButton({
  icon,
  buttonText,
  variant,
}: VideoButtonProps): JSX.Element {
  return (
    <button
      className={
        variant
          ? `${styles[`button--${variant}`]} ${styles.button}`
          : styles.button
      }
    >
      {icon}
      {buttonText}
    </button>
  );
}

export default VideoButton;
