import { LogoLink } from "../LogoLink/LogoLink.jsx";
import css from "./Footer.module.css";
import { Navigation } from "../Navigation/Navigation.jsx";

export const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className={css.footerContent}>
        <LogoLink />
        <div className={css.footerLinks}>
          <h5>Quick Links</h5>
          <Navigation variant="footer" />
        </div>
        <div className={css.footerLinks}>
          <h5>Contact Us</h5>
          <div className={css.contactInfo}>
            <p>123 Main Street, City, Country</p>
            <p>Email: info@gorey.com</p>
          </div>
        </div>
      </div>
      <p className={css.footerText}>© 2026 Gorey. All rights reserved.</p>
    </footer>
  );
};
