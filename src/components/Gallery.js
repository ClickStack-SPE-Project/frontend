import React, { useState } from 'react';
import Album from './Album';
import ImageList from './ImageList';
import { Link } from 'react-router-dom';

const albums = [
  { id: 1, name: 'Album 1', images: ['../Resources/gallery.png', '../Resources/gallery.png', '../Resources/gallery.png'] },
  { id: 2, name: 'Album 2', images: ['../Resources/gallery.png', '../Resources/gallery.png', '../Resources/gallery.png'] },
];

const Gallery = () => {
  const [selectedAlbum, setSelectedAlbum] = useState(null);

  const handleAlbumClick = (albumId) => {
    setSelectedAlbum(albumId); // Update selectedAlbum state with the clicked albumId
  };

  return (
    <div>
      <ul className="album-list mt">
        {albums.map(album => (
          <li key={album.id}>
            <Album albumName={album.name} albumId={album.id} onClick={() => handleAlbumClick(album.id)} />
          </li>
        ))}
      </ul>
      {selectedAlbum && <ImageList images={albums[selectedAlbum - 1].images} />} {/* Adjusted to use selectedAlbum - 1 as index */}
    </div>
  );
};

export default Gallery;
