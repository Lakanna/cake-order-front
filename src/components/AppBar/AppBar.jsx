import css from './AppBar.module.css';
import { LogoLink } from '../LogoLink/LogoLink.jsx';
import { Navigation } from '../Navigation/Navigation.jsx';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RxHamburgerMenu } from 'react-icons/rx';

export const AppBar = () => {
  return (
    <header className={css.header}>
      <LogoLink />
      <Navigation />

      <button className={css.burgerMenu} aria-label="Open menu">
        <RxHamburgerMenu size={20} />
      </button>
    </header>
  );
};
