import React from 'react';
import { useParams } from 'react-router-dom';
import { Project } from '../../../types';
import BackButton from '../../components/BackButton/BackButton';
import VideoIcon from '../../components/Icons/VideoIcon';
import InformationCard from '../../components/InformationCard/InformationCard';
import useFetch from '../../hooks/useFetch';
import styles from './Details.module.css';

function Details(): JSX.Element {
  const { id } = useParams<{ id?: string | undefined }>();
  const { data: project, isLoading, errorMessage } = useFetch<Project>(
    `/api/projects/${id}`
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (errorMessage) {
    return <div>Error</div>;
  }

  if (!project) {
    return <div>Project not found</div>;
  }
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <BackButton />
        <img
          src={project.profile_picture}
          alt="Project Image"
          className={styles.image}
        />
      </header>

      <main className={styles.main}>
        <h1 className={styles.headline}>{project.title}</h1>
        <InformationCard
          financedPercent={project.progress_percentage}
          videoViews={240}
          openAmount={(project.open_amount_in_cents / 100).toFixed(2)}
          buttonIcon={<VideoIcon />}
          buttonText="Video ansehen"
          buttonVariant="primary"
        />
        <p className={styles.text}>
          {project.description.replace(/<\/?[^>]+(>|$)/g, '')}
        </p>
      </main>
    </div>
  );
}

export default Details;
