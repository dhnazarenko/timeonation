import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavigationLink.module.css';

type LinkProps = {
  icon: React.SVGProps<SVGSVGElement>;
  link: string;
  active: boolean;
};

function NavigationLink({ icon, link, active }: LinkProps): JSX.Element {
  return (
    <div
      className={`${styles.navigationLink} ${
        active ? styles['navigationLink--active'] : ''
      } `}
    >
      <Link to={link}>{icon}</Link>
    </div>
  );
}

export default NavigationLink;
