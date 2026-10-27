import css from './ProductButton.module.css';
// import { IoIosCheckmark } from 'react-icons/io';
import { FaCheck } from 'react-icons/fa6';

export const ProductButton = ({
  value,
  label,
  img,
  selected,
  onSelect,
  variant = 'default',
}) => {
  return (
    <button
      className={`${css.sizeButton} ${css[variant]} ${selected ? css.selected : ''}`}
      type="button"
      onClick={onSelect}
    >
      <div className={css.checkBox}>
        <FaCheck className={css.checkMark} />
      </div>

      <img className={css.img} src={img} alt="" />
      <div className={css.descriptionBox}>
        <p>{value}</p>

        {label && <p>{label}</p>}
      </div>
    </button>
  );
};
