import { PhotoUpload } from '../PhotoUpload/PhotoUpload.jsx';
import css from './Design.module.css';

export const Design = ({ order, updateOrder }) => {
  const onPhotoChange = (img) => {
    console.log(img, 'img');
    return updateOrder('photo', img);
  };

  console.log(order, 'order');

  return (
    <section>
      <h3>Photo on top?</h3>
      <p className={css.text}>
        You can upload your own photo or describe what you'd like (e.g.
        Spiderman, dinosaur, etc)
      </p>
      <PhotoUpload onPhotoChange={onPhotoChange} />
      <h4>Or describe what you'd like</h4>
      <div className={css.messageField}>
        <input
          id="descriptionCharacter"
          type="text"
          className={css.input}
          placeholder="e.g. Spiderman"
          value={order.descriptionCharacter}
          onChange={(e) => updateOrder('descriptionCharacter', e.target.value)}
          maxLength={50}
        />

        <p className={css.hint}>Up to 50 characters.</p>
      </div>
    </section>
  );
};
