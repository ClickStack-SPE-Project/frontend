import React, { useState } from 'react';
import '../components/ImageUpload.css'; 

const ImageUpload = ({ isUploaded }) => {
  const [isDialogActive, setDialogActive] = useState(false);
  const [selectedFile, setSelectedFile] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');

  const upload = () => {
    setDialogActive(true);
  };

  const save = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', selectedFile);
    formData.append('description', description);
    formData.append('tags', tags);

    fetch('http://localhost:3000/image/upload', {
      method: 'POST',
      body: formData,
    })
      .then((res) => {
        if (res.status === 201) {
          setDialogActive(false);
          isUploaded(true);
        }
      })
      .catch((err) => console.log(err));
  };

  const cancel = () => {
    setDialogActive(false);
  };

  const onFileUpload = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  return (
    <div className="image-upload-container">
      <button className="upload-button" onClick={upload}>
        Upload New Image
      </button>
      {isDialogActive && (
        <div className="dialog-overlay">
          <div className="dialog-content">
            <h2>Upload Image</h2>
            <form onSubmit={save}>
              <div>
                <label>Image Description</label>
                <input
                  className="form-input"
                  type="text"
                  placeholder="Image Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div>
                <label>Image Tags</label>
                <input
                  className="form-input"
                  type="text"
                  placeholder="Ex: tag1, tag2, tag3"
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                />
              </div>
              <div>
                <input type="file" onChange={onFileUpload} />
              </div>
              <div>
                <button type="submit" className="form-button-submit">
                  Save
                </button>
                <button type="button" onClick={cancel} className="form-button-cancel">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
