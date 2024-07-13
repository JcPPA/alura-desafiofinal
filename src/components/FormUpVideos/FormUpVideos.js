import React, { useState } from 'react';
import './FormUpVideos.css';

const FormUpVideos = ({ addVideo }) => {
  const [videoData, setVideoData] = useState({
    id: '',
    title: '',
    videoUrl: '',
    category: '',
    description: '',
  });

  const handleChange = (e) => {
    setVideoData({
      ...videoData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newVideoData = {
      ...videoData,
      id: generateRandomId(),
      thumbnailUrl: extractThumbnailUrl(videoData.videoUrl),
    };

    try {
      const response = await fetch('http://localhost:5000/videos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newVideoData),
      });

      if (!response.ok) {
        throw new Error('Erro ao cadastrar o vídeo.');
      }

      const savedVideo = await response.json();
      addVideo(savedVideo);

      setVideoData({
        id: '',
        title: '',
        videoUrl: '',
        category: '',
        description: '',
      });

      alert('Vídeo cadastrado com sucesso!');
    } catch (error) {
      console.error('Erro ao cadastrar o vídeo:', error);
      alert('Erro ao cadastrar o vídeo. Por favor, tente novamente.');
    }
  };

  const generateRandomId = () => {
    return Math.floor(Math.random() * 1000000);
  };

  const extractThumbnailUrl = (videoUrl) => {
    if (videoUrl.includes('youtube.com')) {
      return `https://img.youtube.com/vi/${videoUrl.split('v=')[1].split('&')[0]}/0.jpg`;
    } else if (videoUrl.includes('vimeo.com')) {
      const videoId = videoUrl.split('/').pop();
      return `https://vumbnail.com/${videoId}.jpg`;
    } else {
      // Caso geral para outros tipos de vídeo ou fallback
      return `https://img.youtube.com/vi/${videoUrl.split('/')[3].split('?')[0]}/0.jpg`;
    }
  };

  return (
    <article className="form-container">
      <fieldset>
        <form onSubmit={handleSubmit}>
          <h3>Cadastrar Vídeos Novos</h3>
          <label>Id nº: {videoData.id}</label>
          <br />
          <label>Nome do Vídeo:</label>
          <input
            type="text"
            name="title"
            value={videoData.title}
            onChange={handleChange}
            required
          />
          <br />
          <label htmlFor="videoUrl">URL do Vídeo:</label>
          <input
            type="text"
            id="videoUrl"
            name="videoUrl"
            value={videoData.videoUrl}
            onChange={handleChange}
            required
          />
          <br />
          <label>Categoria:</label>
          <select
            name="category"
            value={videoData.category}
            onChange={handleChange}
            required
          >
            <option value="">Selecione</option>
            <option value="SoftSkills">SoftSkills</option>
            <option value="HardSkills">HardSkills</option>
            <option value="Front-End">Front-End</option>
            <option value="Back-End">Back-End</option>
            <option value="Data Science">Data Science</option>
            <option value="Cyber Security">Cyber Security</option>
          </select>
          <br />
          <label>Descrição do Vídeo:</label>
          <textarea
            name="description"
            value={videoData.description}
            onChange={handleChange}
            required
          ></textarea>
          <br />
          <button type="submit">Cadastrar</button>
        </form>
      </fieldset>
    </article>
  );
};

export default FormUpVideos;
