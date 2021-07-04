import React from 'react';
import styles from './Main.module.css';
import Avatar from '../../components/Avatar/Avatar';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import CategoryCard from '../../components/CategoryCard/CategoryCard';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import useProjects from '../../hooks/useProjects';

const categoriesArray = [
  'Klimaschutz',
  'Tiere',
  'Kinder und Jugend',
  'Bildung',
  'Geflüchtete',
  'Umwelt',
  'Frauen',
  'Gesundheit',
  'Kultur',
  'Katastrophenschutz',
  'Nothilfe Beirut',
  'Seenotrettung',
  'Ernährung',
  'Obdachlosenhilfe',
  'Menschenrechte',
  'Senioren',
  'Entwicklungshilfe',
  'Sport',
  'Inklusion',
  'Integration',
  'Trinkwasser',
  'Tchnologie',
  'Forschung',
  'Infastruktur',
  'Nothilfe Syrien',
  'Hungerhilfe in Afrika',
  'Politische Bildung',
  'Nothilfe Jemen',
  'Religion',
  'Gesundheit',
  'Nothilfe Indonesien',
];

function Main(): JSX.Element {
  const { projects, isLoading, errorMessage } = useProjects();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (errorMessage) {
    return <div>Error: {errorMessage}</div>;
  }

  if (!projects) {
    return <div>Project not found</div>;
  }
  return (
    <div className={styles.container}>
      <h1 className={styles.headline}>
        Aktuelle
        <br />
        Projekte
      </h1>
      <div className={styles.avatar}>
        <Avatar imageSrc="./daniel.jpg" link="#" />
      </div>
      <article className={styles.card}>
        {projects.map((project) => (
          <ProjectCard
            id={project.id}
            key={project.id}
            projectImage={project.profile_picture}
            projectTitle={project.title}
            country={project.country}
            companyLogo={project.carrier}
            videoViews={240}
            openAmount={(project.open_amount_in_cents / 100).toFixed(2)}
          />
        ))}
      </article>
      <h2 className={styles.headline}>Kategorie</h2>
      <article className={styles.card}>
        <CategoryCard categories={categoriesArray} />
      </article>
      <NavigationBar />
    </div>
  );
}

export default Main;
