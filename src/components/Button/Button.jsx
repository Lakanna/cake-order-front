import css from './Button.module.css';

export const Button = ({
  onClick,
  children,
  type = 'button',
  textPosition = '',
}) => {
  const style =
    textPosition === 'center' ? `${css.btn} ${css.center}` : `${css.btn}`;
  return (
    <button className={style} type={type} onClick={onClick}>
      {children}
    </button>
  );
};
