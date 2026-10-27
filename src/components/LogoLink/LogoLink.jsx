import { Link } from 'react-router-dom';

import css from './LogoLink.module.css';
import logo from '../../pictures/pettits (1).webp';

export const LogoLink = () => {
  return (
    <Link className={css.logoLink} to="/" aria-label="Go to homepage">
      <img src={logo} alt="Logo" height="60" />
      <p className={css.logoText}>Gorey</p>
    </Link>
  );
};
