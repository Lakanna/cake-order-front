import { useEffect, useState } from 'react';
import css from './PhotoUpload.module.css';

const MAX_FILE_SIZE = 5 * 1024 * 1024;
const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/webp'];

export const PhotoUpload = ({ onPhotoChange }) => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (!file) {
      setPreview('');
      return;
    }

    const objectUrl = URL.createObjectURL(file);
    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [file]);

  const handleChange = (event) => {
    const selectedFile = event.target.files?.[0];

    event.target.value = '';

    if (!selectedFile) return;

    if (!ALLOWED_TYPES.includes(selectedFile.type)) {
      setError('Please upload a JPG, PNG or WebP image.');
      return;
    }

    if (selectedFile.size > MAX_FILE_SIZE) {
      setError('The image must be smaller than 5 MB.');
      return;
    }

    setError('');
    setFile(selectedFile);
    onPhotoChange?.(selectedFile);
  };

  const handleRemove = () => {
    setFile(null);
    setPreview('');
    setError('');
    onPhotoChange?.(null);
  };

  return (
    <section className={css.upload}>
      {preview ? (
        <div className={css.preview}>
          <img src={preview} alt="Selected photo for a cake" />

          <button type="button" onClick={handleRemove}>
            Remove photo
          </button>
        </div>
      ) : (
        <label className={css.dropzone}>
          <span>Choose a photo</span>
          <span>JPG, PNG or WebP · Max 5 MB</span>

          <input
            type="file"
            accept="image/jpeg,image/png,image/webp"
            onChange={handleChange}
          />
        </label>
      )}

      {file && <p className={css.fileName}>{file.name}</p>}

      {error && (
        <p className={css.error} role="alert">
          {error}
        </p>
      )}
    </section>
  );
};
