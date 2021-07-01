import React from 'react';
import CategoryCard from './CategoryCard';

export default {
  title: 'Component/CategoryCard',
  component: CategoryCard,
};

const categoriesArray = [
  'Klimaschutz',
  'Tiere',
  'Kinder und Jugend',
  'Bildung',
];

export const showCategory1 = (): JSX.Element => (
  <CategoryCard categories={categoriesArray} />
);

const categoriesArray2 = [
  'Geflüchtete',
  'Umwelt',
  'Frauen',
  'Gesundheit',
  'Kultur',
];

export const showCategory2 = (): JSX.Element => (
  <CategoryCard categories={categoriesArray2} />
);

const categoriesArray3 = [
  'Katastrophenschutz',
  'Nothilfe Beirut',
  'Seenotrettung',
  'Ernährung',
  'Obdachlosenhilfe',
];

export const showCategory3 = (): JSX.Element => (
  <CategoryCard categories={categoriesArray3} />
);
