const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const videosFilePath = path.join(__dirname, 'BdUpVideo.json');

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

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
