import React from 'react';
import styles from './CategoryCard.module.css';

type CategoryCardProps = {
  categoryTitle: string;
};

function CategoryCard({ categoryTitle }: CategoryCardProps): JSX.Element {
  return (
    <div className={styles.container}>
      <h2 className={styles.container__title}>{categoryTitle}</h2>
    </div>
  );
}

export default CategoryCard;
