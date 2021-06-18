import React from 'react';

function VideoIcon(): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="24">
      <g transform="translate(0 -6)">
        <path
          d="M34.5,10.5,24,18l10.5,7.5Z"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="3"
        />
        <path
          d="M4.5,7.5H21a3,3,0,0,1,3,3v15a3,3,0,0,1-3,3H4.5a3,3,0,0,1-3-3v-15a3,3,0,0,1,3-3Z"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="3"
        />
      </g>
    </svg>
  );
}

export default VideoIcon;
