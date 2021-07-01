import React from 'react';
import { Link } from 'react-router-dom';
import styles from './CategoryCard.module.css';

type InputProps = {
  categories: Array<string>;
};

function CategoryCard({ categories }: InputProps): JSX.Element {
  return (
    <div className={styles.test}>
      {categories.map((category) => (
        <Link to="#" className={styles.link}>
          <h2 key={category} className={styles.link__title}>
            {category}
          </h2>
        </Link>
      ))}
    </div>
  );
}

export default CategoryCard;
