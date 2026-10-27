import { Suspense } from "react";
import { AppBar } from "../AppBar/AppBar";
import { Footer } from "../Footer/Footer.jsx";
import css from "./Layout.module.css";

export const Layout = ({ children }) => {
  return (
    <div className={css.container}>
      <AppBar />
      <main className={css.mainContent}>
        <Suspense fallback={null}>{children}</Suspense>
      </main>
      <Footer />
    </div>
  );
};
