import css from './SmallBtn.module.css';

export const SmallBtn = ({ value, onClick, order }) => {
  return (
    <button
      className={`${css.decorBtn} ${order.includes(value) ? css.selected : ''} `}
      type="button"
      onClick={onClick}
    >
      {value}
    </button>
  );
};
