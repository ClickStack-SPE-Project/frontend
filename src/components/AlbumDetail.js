import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ImageList from './ImageList';
import galleryInstance from './Services/galleryServices';
import 'bootstrap/dist/css/bootstrap.min.css';

const AlbumDetail = () => {
  const { albumId } = useParams();
  const [selectedAlbum, setselectedAlbum] = useState([]);

  useEffect(() => { 
    const fetchAlbums = async () => {
      try {
        const albumData = await galleryInstance.getAllPhotos(albumId);
        setselectedAlbum(albumData);
      } catch (error) {
        console.error('Error fetching albums:', error);
      }
    };

    fetchAlbums();
  }, [albumId]);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Album: {albumId}</h2>
      <ImageList images={selectedAlbum} />
    </div>
  );
};

export default AlbumDetail;
