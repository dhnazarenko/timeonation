import React from 'react';
import InformationCard from './InformationCard';
import VideoIcon from '../Icons/VideoIcon';

export default {
  title: 'Component/InformationCard',
  component: InformationCard,
};

export const Details = (): JSX.Element => (
  <InformationCard
    financedPercent={50}
    videoViews={240}
    openAmount={66.051}
    buttonIcon={<VideoIcon />}
    buttonText="Video ansehen"
    buttonVariant="primary"
  />
);
