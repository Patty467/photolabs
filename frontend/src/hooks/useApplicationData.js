import React, { useReducer } from 'react';

const initialState = {
  favorites: [],
  isModalOpen: false,
  selectedPhoto: null
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_FAVORITES':
      return { ...state, favorites: action.payload };
    case 'TOGGLE_MODAL':
      return { ...state, isModalOpen: action.payload };
    case 'SET_SELECTED_PHOTO':
      return { ...state, selectedPhoto: action.payload };
    default:
      return state;
  }
};

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openModal = (e, photo) => {
    if (e.target.className !== 'favorite-button') {
      dispatch({ type: 'SET_SELECTED_PHOTO', payload: photo });
      dispatch({ type: 'TOGGLE_MODAL', payload: true });
    }
  };

  const closeModal = () => {
    dispatch({ type: 'TOGGLE_MODAL', payload: false });
  };

  const toggleFavorite = (photo) => {
    if (state.favorites.includes(photo)) {
      dispatch({ type: 'SET_FAVORITES', payload: state.favorites.filter(fav => fav !== photo) });
    } else {
      dispatch({ type: 'SET_FAVORITES', payload: [...state.favorites, photo] });
    }
  };

  return { state, openModal, closeModal, toggleFavorite };
};

export default useApplicationData;