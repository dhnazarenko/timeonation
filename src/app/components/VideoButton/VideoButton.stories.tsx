import React from 'react';
import VideoButton from './VideoButton';
import VideoIcon from '../Icons/VideoIcon';

export default {
  title: 'Component/VideoButton',
  component: VideoButton,
};

export const PrimaryButton = (): JSX.Element => (
  <VideoButton
    icon={<VideoIcon />}
    buttonText="Video ansehen"
    variant="primary"
  />
);

export const SecondaryButton = (): JSX.Element => (
  <VideoButton
    icon={<VideoIcon />}
    buttonText="Video ansehen"
    variant="secondary"
  />
);
