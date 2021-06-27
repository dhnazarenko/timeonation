import React from 'react';
import CategoryIcon from '../../components/Icons/CategoryIcon';
import LocationIcon from '../../components/Icons/LocationIcon';
import SearchIcon from '../../components/Icons/SearchIcon';
import LabeledInput from '../../components/LabeledInput/LabeledInput';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import styles from './Search.module.css';

function Search(): JSX.Element {
  return (
    <div className={styles.container}>
      <h1 className={styles.headline}>Suche</h1>
      <div className={styles.search}>
        <LabeledInput
          icon={<CategoryIcon />}
          placeholder="Kategorie"
          value=""
          onChange={console.log}
        />
        <LabeledInput
          icon={<LocationIcon />}
          placeholder="Ort"
          value=""
          onChange={console.log}
        />
        <LabeledInput
          icon={<SearchIcon />}
          placeholder="Suche"
          value=""
          onChange={console.log}
        />
      </div>
      <article className={styles.card}>
        <ProjectCard
          projectImage="/weidensee.jpg"
          projectTitle="Tiere auf Lebenshof Gut Weidensee benötigen dringend Hilfe!"
          country="Deutschland"
          city="Mühlhausen"
          companyLogo="/weidensee-logo.png"
          videoViews={240}
          openAmount={66.051}
        />
        <ProjectCard
          projectImage="/weidensee.jpg"
          projectTitle="Tiere auf Lebenshof Gut Weidensee benötigen dringend Hilfe!"
          country="Deutschland"
          city="Mühlhausen"
          companyLogo="/weidensee-logo.png"
          videoViews={240}
          openAmount={66.051}
        />
      </article>

      <NavigationBar />
    </div>
  );
}

export default Search;
