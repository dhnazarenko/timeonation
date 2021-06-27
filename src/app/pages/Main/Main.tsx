import React from 'react';
import styles from './Main.module.css';
import Avatar from '../../components/Avatar/Avatar';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import CategoryCard from '../../components/CategoryCard/CategoryCard';
import NavigationBar from '../../components/NavigationBar/NavigationBar';

function Main(): JSX.Element {
  return (
    <div className={styles.container}>
      <h1 className={styles.headline}>
        Beliebteste
        <br />
        Projekte
      </h1>
      <div className={styles.avatar}>
        <Avatar imageSrc="./daniel.jpg" link="#" />
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
      <h2 className={styles.headline}>Kategorie</h2>
      <article className={styles.card}>
        <CategoryCard categoryTitle="Corona Nothilfe" />
        <CategoryCard categoryTitle="Kinder und Jugend" />
        <CategoryCard categoryTitle="Klimaschutz" />
        <CategoryCard categoryTitle="Tiere" />
      </article>
      <NavigationBar />
    </div>
  );
}

export default Main;
