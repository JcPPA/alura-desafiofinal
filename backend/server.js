const express = require('express');
const path = require('path');
const cors = require('cors');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 5000;
const videosFilePath = path.join(__dirname, 'BdUpVideo.json');

app.use(cors());
app.use(express.json());

// Rota para obter os vídeos
app.get('/videos', (req, res) => {
  fs.readFile(videosFilePath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).json({ message: 'Erro ao ler o arquivo de vídeos' });
    } else {
      const videos = JSON.parse(data).videos;
      res.json(videos);
    }
  });
});

// Rota para adicionar um novo vídeo
app.post('/videos', (req, res) => {
  const newVideo = req.body;

  fs.readFile(videosFilePath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).json({ message: 'Erro ao ler o arquivo de vídeos' });
    } else {
      const videosData = JSON.parse(data);
      videosData.videos.push(newVideo);

      fs.writeFile(videosFilePath, JSON.stringify(videosData, null, 2), (err) => {
        if (err) {
          res.status(500).json({ message: 'Erro ao salvar o novo vídeo' });
        } else {
          res.status(201).json(newVideo);
        }
      });
    }
  });
});

// Servir arquivos estáticos e o index.html
app.use(express.static(path.join(__dirname, 'public')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor está executando na porta ${PORT}`);
});
