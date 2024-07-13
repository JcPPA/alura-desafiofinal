/*const FormStorageDates = {
    saveVideosToJson: (newVideoData) => {
      console.log('Iniciando a função saveVideosToJson');
  
      const storedData = localStorage.getItem('BdUpVideo');
      console.log('Dados armazenados antes da atualização:', storedData);
  
      const videos = storedData ? JSON.parse(storedData).videos : [];
      const updatedVideos = [...videos, newVideoData];
  
      const jsonContent = JSON.stringify({ videos: updatedVideos }, null, 2);
      localStorage.setItem('BdUpVideo', jsonContent);
  
      console.log('Dados armazenados após a atualização:', localStorage.getItem('BdUpVideo'));
    }
  };
  
  export default FormStorageDates;*/
  