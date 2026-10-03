import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu as MenuIcon } from "lucide-react";

import { navItems, site } from "../../data/site";
import MobileMenu from "./MobileMenu";
import styles from "./Header.module.css";

/* ------------------------------------------------------------
   Editorial masthead — sticky at the top of every page.
   Desktop: wordmark · centre nav · reservation CTA.
   Mobile:  wordmark · hamburger (opens MobileMenu).
   ------------------------------------------------------------ */

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const toggleRef = useRef<HTMLButtonElement>(null);
  const wasOpen = useRef(false);

  /* Add a hairline border once the page has been scrolled. */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Close the mobile menu on every route change. */
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  /* Return keyboard focus to the toggle when the menu closes. */
  useEffect(() => {
    if (wasOpen.current && !menuOpen) {
      toggleRef.current?.focus();
    }
    wasOpen.current = menuOpen;
  }, [menuOpen]);

  return (
    <>
      <header
        className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}
      >
        <div className={`container ${styles.inner}`}>
          <Link
            to="/"
            className={styles.brand}
            aria-label={`${site.name} — ${site.city} — Home`}
          >
            <span className={styles.brandName}>{site.name}</span>
            <span className={styles.brandCity}>{site.city}</span>
          </Link>

          <nav className={styles.desktopNav} aria-label="Primary">
            <ul className={styles.navList}>
              {navItems.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    end={item.to === "/"}
                    className={({ isActive }) =>
                      `${styles.navLink} ${
                        isActive ? styles.navLinkActive : ""
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.actions}>
            <Link to="/reservation" className={styles.reserveBtn}>
              Reserve a Table
            </Link>

            <button
              type="button"
              ref={toggleRef}
              className={styles.menuToggle}
              aria-label="Open menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen(true)}
            >
              <MenuIcon size={22} strokeWidth={1.5} aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}