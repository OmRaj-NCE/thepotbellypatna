import { useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { MapPin, Phone, X } from "lucide-react";

import { navItems, site } from "../../data/site";
import styles from "./MobileMenu.module.css";

type Props = {
  open: boolean;
  onClose: () => void;
};

/* ------------------------------------------------------------
   Full-screen mobile menu.
   - Locks body scroll while open.
   - Traps keyboard focus within the panel.
   - Closes on Escape.
   - Restores focus to the toggle (handled in Header).
   ------------------------------------------------------------ */

export default function MobileMenu({ open, onClose }: Props) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  /* Lock background scroll */
  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  /* Move focus to the close button on open */
  useEffect(() => {
    if (open) closeRef.current?.focus();
  }, [open]);

  /* Escape to close + focus trap */
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key !== "Tab") return;

      const root = panelRef.current;
      if (!root) return;

      const focusable = root.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement as HTMLElement | null;

      if (e.shiftKey && active === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          id="mobile-menu"
          ref={panelRef}
          className={styles.overlay}
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className={styles.topRow}>
            <span className={styles.eyebrow}>Index</span>
            <button
              type="button"
              ref={closeRef}
              className={styles.closeBtn}
              aria-label="Close menu"
              onClick={onClose}
            >
              <X size={22} strokeWidth={1.5} aria-hidden="true" />
            </button>
          </div>

          <nav className={styles.nav} aria-label="Mobile primary">
            <ul className={styles.list}>
              {navItems.map((item, i) => (
                <motion.li
                  key={item.to}
                  initial={{ y: 28, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: 0.08 + i * 0.05,
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <NavLink
                    to={item.to}
                    end={item.to === "/"}
                    className={({ isActive }) =>
                      `${styles.link} ${isActive ? styles.linkActive : ""}`
                    }
                  >
                    <span className={styles.linkIndex}>
                      0{i + 1}
                    </span>
                    <span className={styles.linkLabel}>{item.label}</span>
                  </NavLink>
                </motion.li>
              ))}
            </ul>
          </nav>

          <motion.div
            className={styles.footer}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              to="/reservation"
              className={styles.reserveBtn}
              onClick={onClose}
            >
              Reserve a Table
            </Link>

            <div className={styles.meta}>
              <p className={styles.metaRow}>
                <MapPin size={14} strokeWidth={1.5} aria-hidden="true" />
                <span>{site.address}</span>
              </p>
              <p className={styles.metaRow}>
                <Phone size={14} strokeWidth={1.5} aria-hidden="true" />
                <a href={site.phoneHref}>{site.phone}</a>
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}