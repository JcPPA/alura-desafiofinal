import React, { useState } from 'react';
import './UpVideos.css';
import FormUpVideos from '../FormUpVideos/FormUpVideos';
import MenuHeader from '../MenuHeader/MenuHeader'; // Importação do MenuHeader

const UpVideos = () => {
  const [videos, setVideos] = useState([
    { id: 'abc123', thumbnailUrl: 'https://storage.googleapis.com/support-forums-api/attachment/message-223455524-4125100802620654799.jpg', title: 'Video Title 1' },
    { id: 'def456', thumbnailUrl: 'https://storage.googleapis.com/support-forums-api/attachment/message-223455524-4125100802620654799.jpg', title: 'Video Title 2' },
    { id: 'ghi789', thumbnailUrl: 'https://storage.googleapis.com/support-forums-api/attachment/message-223455524-4125100802620654799.jpg', title: 'Video Title 3' },
    { id: 'jkl012', thumbnailUrl: 'https://storage.googleapis.com/support-forums-api/attachment/message-223455524-4125100802620654799.jpg', title: 'Video Title 4' },
  ]);

  const addVideo = (newVideo) => {
    const updatedVideos = [newVideo, ...videos];

    if (updatedVideos.length > 4) {
      updatedVideos.pop();
    }

    setVideos(updatedVideos);
  };

  return (
    <div>
      <MenuHeader /> {/* Incluir o MenuHeader aqui */}
      <div className="container">
        <div className="title">Faça novos cadastros!</div>
        <div className="subtitle">E confira abaixo os vídeos recentemente adicionados.</div>

        <FormUpVideos addVideo={addVideo} />

        <div className="video-list">
          {videos.map((video, index) => (
            <div key={index} className="video-item">
              {video.thumbnailUrl ? (
                <img src={video.thumbnailUrl} alt={video.title} />
              ) : (
                <div>Miniatura Indisponível</div>
              )}
              <h3>{video.title}</h3>
              <p>ID: {video.id}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpVideos;
