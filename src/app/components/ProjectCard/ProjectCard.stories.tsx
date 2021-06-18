import React from 'react';
import ProjectCard from './ProjectCard';

export default {
  title: 'Component/ProjectCard',
  component: ProjectCard,
};

export const GroupCard = (): JSX.Element => (
  <ProjectCard
    projectImage="/weidensee.jpg"
    projectTitle="Tiere auf Lebenshof Gut Weidensee benötigen dringend Hilfe!"
    country="Deutschland"
    city="Mühlhausen"
    companyLogo="/weidensee-logo.png"
    videoViews={240}
    openAmount={66.051}
  />
);
