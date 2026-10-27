import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";

export const Navigation = ({ variant = "header" }) => {
  const navigationClass = variant === "footer" ? css.footerNav : css.headerNav;

  const linkClass = ({ isActive }) =>
    `${css.link} ${isActive ? css.active : ""}`;

  return (
    <nav className={navigationClass}>
      <NavLink className={linkClass} to="/">
        Home
      </NavLink>

      <NavLink className={linkClass} to="/gallery">
        Gallery
      </NavLink>

      <NavLink className={linkClass} to="/order">
        Order
      </NavLink>
    </nav>
  );
};
