import React, { useState } from 'react';
import './UpVideos.css';
import FormUpVideos from '../FormUpVideos/FormUpVideos';

const UpVideos = () => {
  const [videos, setVideos] = useState([
    { id: '', thumbnailUrl: 'https://img.youtube.com/vi/1/0.jpg', title: '' },
    { id: '', thumbnailUrl: 'https://img.youtube.com/vi/2/0.jpg', title: '' },
    { id: '', thumbnailUrl: 'https://img.youtube.com/vi/3/0.jpg', title: '' },
    { id: '', thumbnailUrl: 'https://img.youtube.com/vi/4/0.jpg', title: '' },
  ]);

  const addVideo = (newVideo) => {
    const updatedVideos = [newVideo, ...videos];

    if (updatedVideos.length > 4) {
      updatedVideos.pop();
    }

    setVideos(updatedVideos);
  };

  return (
    <div className="container">
      <div className="title">Faça novos cadastros!</div>
      <div className="subtitle">E confira abaixo os vídeos recentemente adicionados.</div>

      <FormUpVideos addVideo={addVideo} />

      <div className="video-list">
        {videos.map((video, index) => (
          <div key={index} className="video-item">
            <img src={video.thumbnailUrl} alt={video.title} />
            <h3>{video.title}</h3>
            <p>ID: {video.id}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpVideos;
