import React from 'react';
import HomeRoute from './routes/HomeRoute';
import useApplicationData from 'hooks/useApplicationData';
import './App.scss';

const App = () => {
  const {
    state: {
      favorites,
      isModalOpen,
      selectedPhoto
    },
    openModal,
    closeModal,
    toggleFavorite
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute 
        favorites={favorites}
        isModalOpen={isModalOpen}
        selectedPhoto={selectedPhoto}
        openModal={openModal}
        closeModal={closeModal}
        toggleFavorite={toggleFavorite}
      />
    </div>
  );
};

export default App;