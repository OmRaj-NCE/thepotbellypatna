import { Link } from "react-router-dom";

import { navItems, site } from "../../data/site";
import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brandCol}>
          <p className={styles.label}>Bihar Museum · Patna</p>

          <Link to="/" className={styles.brand}>
            {site.name}
          </Link>

          <p className={styles.hindi}>
            {site.nameHindi} — {site.cityHindi}
          </p>

          <p className={styles.tagline}>{site.tagline}</p>
        </div>

        <div className={styles.cols}>
          <div className={styles.col}>
            <h2 className={styles.colTitle}>Explore</h2>
            <ul className={styles.colList}>
              {navItems.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className={styles.colLink}>
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/reservation" className={styles.colLink}>
                  Reserve a Table
                </Link>
              </li>
            </ul>
          </div>

          <div className={styles.col}>
            <h2 className={styles.colTitle}>Visit</h2>
            <p className={styles.colText}>{site.address}</p>
            <p className={styles.colText}>
              <a href={site.phoneHref} className={styles.colLink}>
                {site.phone}
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className={`container ${styles.baseline}`}>
        <p className={styles.copyright}>
          © {year} {site.name} — {site.city}. All rights reserved.
        </p>
        <p className={styles.credit}>{site.cuisine}</p>
      </div>
    </footer>
  );
}