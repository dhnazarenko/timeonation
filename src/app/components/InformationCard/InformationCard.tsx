import React from 'react';
import VideoButton from '../VideoButton/VideoButton';
import styles from './InformationCard.module.css';

type InformationCardProps = {
  financedPercent: number;
  videoViews: number;
  openAmount: number | string;
  buttonIcon: React.SVGProps<SVGSVGElement>;
  buttonText: string;
  buttonVariant?: 'primary' | 'secondary';
};

function InformationCard({
  financedPercent,
  videoViews,
  openAmount,
  buttonIcon,
  buttonText,
  buttonVariant,
}: InformationCardProps): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.details}>
        <p className={styles.details__legend}>
          <span className={styles.details__number}>{financedPercent} %</span>
          finanziert
        </p>
        <p className={styles.details__legend}>
          <span className={styles.details__number}>{videoViews} mal</span>
          angesehen
        </p>
        <p className={styles.details__legend}>
          <span className={styles.details__number}>{openAmount} €</span>fehlen
          noch
        </p>
      </div>
      <VideoButton
        icon={buttonIcon}
        buttonText={buttonText}
        variant={buttonVariant}
      />
    </div>
  );
}

export default InformationCard;
