import React from 'react';
import styles from './ProjectCard.module.css';

type ProjectCardProps = {
  projectImage: string;
  projectTitle: string;
  country: string | null;
  city: string | null;
  companyLogo: string;
  videoViews: number;
  openAmount: number;
};

function ProjectCard({
  projectImage,
  projectTitle,
  country,
  city,
  companyLogo,
  videoViews,
  openAmount,
}: ProjectCardProps): JSX.Element {
  return (
    <div className={styles.container}>
      <article>
        <img
          src={projectImage}
          alt="Project Image"
          className={styles.project_image}
        />
        <section className={styles.information}>
          <h2 className={styles.information__title}>{projectTitle}</h2>
          <div className={styles.information__data}>
            <span>
              <b>{city},</b> {country}
            </span>
            <span>
              <b>{videoViews} mal</b> angesehen
            </span>
            <span>
              <b>{openAmount} €</b> fehlen noch
            </span>
          </div>
          <img
            src={companyLogo}
            alt="Company Logo"
            className={styles.company_logo}
          />
        </section>
      </article>
    </div>
  );
}

export default ProjectCard;
