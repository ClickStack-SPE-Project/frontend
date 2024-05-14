import React from 'react';
import { useParams } from 'react-router-dom'; // Import useParams to access route parameters
import ImageList from './ImageList'; // Import ImageList component

const albums = [
    { id: 1, name: 'Album 1', images: ['./Resources/gallery.png', './Resources/gallery.png', './Resources/gallery.png'] },
    { id: 2, name: 'Album 2', images: ['./Resources/gallery.png', './Resources/gallery.png', './Resources/gallery.png'] },
    // Add more albums as needed
];

const AlbumDetail = () => {
    const { albumId } = useParams(); // Access albumId from route parameters
    const selectedAlbum = albums.find(album => album.id === parseInt(albumId));

    if (!selectedAlbum) {
        return <div>Album not found!</div>;
    }

    return (
        <div>
            <h2>{selectedAlbum.name}</h2>
            <ImageList images={selectedAlbum.images} />
        </div>
    );
};

export default AlbumDetail;
