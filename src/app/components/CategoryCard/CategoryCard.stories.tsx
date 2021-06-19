import React from 'react';
import CategoryCard from './CategoryCard';

export default {
  title: 'Component/CategoryCard',
  component: CategoryCard,
};

export const Klimaschutz = (): JSX.Element => (
  <CategoryCard categoryTitle="Klimaschutz" />
);
export const Nothilfe = (): JSX.Element => (
  <CategoryCard categoryTitle="Nothilfe Coronavirus" />
);

export const Syrien = (): JSX.Element => (
  <CategoryCard categoryTitle="Syrien Nothilfe" />
);
