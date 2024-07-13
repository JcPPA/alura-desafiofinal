const extractCardsFromServer = async () => {
  try {
    const response = await fetch('http://localhost:5000/videos');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro ao buscar os vídeos:', error);
    throw error;
  }
};

export default extractCardsFromServer;
