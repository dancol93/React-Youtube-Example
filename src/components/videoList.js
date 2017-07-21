import React from 'react';
import VideoListItem from './videoListItem';

const VideoList = (props) => {
  const VideoItems = props.videos.map((video) => {
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video={video}
      />
    );
  });

  return (
    <ul className='list-group col-md-6 col-sm-12 col-lg-4'>
      {VideoItems}
    </ul>
  );
};

export default VideoList;
