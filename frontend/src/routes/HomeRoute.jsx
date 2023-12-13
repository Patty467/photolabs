import React, { useState } from "react";
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {

  const {
    favorites,
    isModalOpen,
    selectedPhoto,
    openModal,
    closeModal,
    toggleFavorite
  } = props

  const isFavePhotoExist = favorites.length > 0;

  return (
    <div className="home-route">
      <TopNavigationBar isFavePhotoExist={isFavePhotoExist}/>
      <PhotoList favorites={favorites} toggleFavorite={toggleFavorite} openModal={openModal} />
      {isModalOpen && 
      <PhotoDetailsModal 
        closeModal={closeModal} 
        photo={selectedPhoto} 
        favorites={favorites}
        toggleFavorite={toggleFavorite}
      />}
    </div>
  );
};

export default HomeRoute;