import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Header from "../navigation/Header";
import Footer from "./Footer";
import PageTransition from "./PageTransition";
import ScrollProgress from "./ScrollProgress";
import styles from "./Layout.module.css";

/* ------------------------------------------------------------
   The shell that wraps every page.
   Provides: skip link, scroll progress, header, main landmark,
   page transition, footer.
   ------------------------------------------------------------ */

export default function Layout() {
  const { pathname } = useLocation();

  /* Scroll to top whenever the route changes. */
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return (
    <div className={styles.layout}>
      <ScrollProgress />

      <a href="#main" className="skip-link">
        Skip to content
      </a>

      <Header />

      <main id="main" className={styles.main}>
        <PageTransition />
      </main>

      <Footer />
    </div>
  );
}