import React, { useState } from 'react';
import Folder from './Folder';
import Photo from './Photo';

const Gallery = () => {
  const [photos, setPhotos] = useState([]);
  const [folders, setFolders] = useState([
    { id: 1, name: 'Folder 1', photos: [] },
    { id: 2, name: 'Folder 2', photos: [] },
  ]);

  const handleDrop = (files, folderId) => {
    const updatedFolders = folders.map((folder) => {
      if (folder.id === folderId) {
        return { ...folder, photos: [...folder.photos, ...files] };
      }
      return folder;
    });
    setFolders(updatedFolders);
  };

  return (
    <div className="app">
      <div className="folders">
        {folders.map((folder) => (
          <Folder key={folder.id} name={folder.name} onDrop={(files) => handleDrop(files, folder.id)} />
        ))}
      </div>
      <div className="photos">
        {photos.map((photo, index) => (
          <Photo key={index} photo={photo} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
