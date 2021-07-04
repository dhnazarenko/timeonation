import React from 'react';
import CategoryIcon from '../../components/Icons/CategoryIcon';
import LocationIcon from '../../components/Icons/LocationIcon';
import SearchIcon from '../../components/Icons/SearchIcon';
import LabeledInput from '../../components/LabeledInput/LabeledInput';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import SearchField from '../../components/SearchField/SearchField';
import useProjects from '../../hooks/useProjects';
import styles from './Search.module.css';

type ProjectSearchProps = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

function Search({ search, setSearch }: ProjectSearchProps): JSX.Element {
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
        <SearchField
          icon={<SearchIcon />}
          placeholder="Suche"
          value={search}
          onChange={setSearch}
        />
      </div>
      <article className={styles.card}>
        {projects.map((project) => (
          <ProjectCard
            id={project.id}
            key={project.title}
            projectImage={project.profile_picture}
            projectTitle={project.title}
            country={project.country}
            companyLogo={project.carrier}
            videoViews={240}
            openAmount={(project.open_amount_in_cents / 100).toFixed(2)}
          />
        ))}
      </article>

      <NavigationBar />
    </div>
  );
}

export default Search;
