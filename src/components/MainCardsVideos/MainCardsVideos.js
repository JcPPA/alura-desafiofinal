import React, { useState, useEffect } from 'react';
import './MainCardsVideos.css';

const MainCardsVideos = () => {
  const [videosByCategory, setVideosByCategory] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch('http://localhost:5000/videos');
        const data = await response.json();
        organizeVideosByCategory(data);
      } catch (error) {
        console.error('Erro ao buscar os vídeos:', error);
      }
    };

    fetchVideos();
  }, []);

  const organizeVideosByCategory = (videos) => {
    const videosByCategory = {};

    videos.forEach((video) => {
      if (!videosByCategory[video.category]) {
        videosByCategory[video.category] = [];
      }
      videosByCategory[video.category].push(video);
    });

    setVideosByCategory(Object.entries(videosByCategory));
  };

  return (
    <div className="video-list">
      {videosByCategory.map(([category, videos]) => (
        <div key={category} className="category">
          <h2>{category}</h2>
          <div className="video-items">
            {videos.map((video, index) => (
              <div key={index} className="video-item">
                <img src={video.thumbnailUrl} alt={video.title} />
                <h3>{video.title}</h3>
                <p>ID: {video.id}</p>
                <p>Description: {video.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MainCardsVideos;
