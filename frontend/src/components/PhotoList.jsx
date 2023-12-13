import React, { useState } from "react";
import PhotoListItem from './PhotoListItem';
import "../styles/PhotoList.scss";
import photos from "mocks/photos.js";

const PhotoList = (props) => {
  const {
    favorites,
    toggleFavorite,
    openModal
  } = props;

  return (
    <ul className="photo-list">
      {photos.map(photo => (
        <PhotoListItem 
        photo={photo} 
        toggleFavorite={toggleFavorite}
        imageSource={photo.urls.regular}  
        profile={photo.user.profile}
        username={photo.user.username}
        city={photo.location.city}
        country={photo.location.country}
        key={photo.id}
        id={photo.id}
        favorites={favorites}
        openModal={openModal}
        />
      ))}
    </ul>
  );
};

export default PhotoList;