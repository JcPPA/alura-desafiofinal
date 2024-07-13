import React from 'react';
import styles from './Home.css';
import MenuHeader from '../../components/MenuHeader/MenuHeader';
import MenuSearch from '../../components/MenuSearch/MenuSearch';
import MainCardsVideos from '../../components/MainCardsVideos/MainCardsVideos';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <div className={styles.container}>
      <MenuHeader />
      <MenuSearch />
      <div className={styles.title}>Bem-vindo ao StudyFlix</div>
      <div className={styles.subtitle}>Explore nosso rol de vídeos!</div>

      <div className={styles.card}>
        <h3>Vídeos</h3>
        <br />
        <div className="cardsUpEver">
          <MainCardsVideos />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;