import css from "./AppBar.module.css";
import { LogoLink } from "../LogoLink/LogoLink.jsx";
import { Navigation } from "../Navigation/Navigation.jsx";

export const AppBar = () => {
  return (
    <header className={css.header}>
      <LogoLink />
      <Navigation />
      <button className={css.burgerMenu} aria-label="Open menu">
        Menu
      </button>
    </header>
  );
};
