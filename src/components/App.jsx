import React from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import css from './App.module.css';
import toast, { Toaster } from 'react-hot-toast';
import { useImagesContext } from 'context/imagesProvider';

export const App = () => {
  const {
    images,
    isLoading,
    isError,
    isEnd,
    handleSearchSubmit,
    handleLoadMore,
  } = useImagesContext();
  return (
    <div className={css.App}>
      <Searchbar onSubmit={handleSearchSubmit} />
      <ImageGallery images={images} />
      {isLoading && <Loader />}
      {!isLoading && !isError && images.length > 0 && !isEnd && (
        <Button onClick={handleLoadMore} />
      )}
      {isError && toast.error('Something went wrong. Please try again later.')}

      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default App;
