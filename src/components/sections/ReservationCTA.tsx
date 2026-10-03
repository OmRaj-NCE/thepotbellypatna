import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

import Reveal from "../ui/Reveal";
import { site } from "../../data/site";
import styles from "./ReservationCTA.module.css";

export default function ReservationCTA() {
  return (
    <section
      className={styles.section}
      aria-labelledby="reserve-title"
    >
      <div className={`container ${styles.inner}`}>
        <Reveal className={styles.copy}>
          <p className={styles.eyebrow}>Reservations</p>

          <h2 id="reserve-title" className={`display-2 ${styles.title}`}>
            Book a table
            <em className="display-italic"> at The Potbelly</em>.
          </h2>

          <p className={styles.body}>
            Tables can be reserved in advance. Call the restaurant directly or
            place a request through the site.
          </p>

          <div className={styles.ctas}>
            <Link to="/reservation" className={styles.btnPrimary}>
              Reserve a Table
              <ArrowUpRight size={16} strokeWidth={1.6} aria-hidden="true" />
            </Link>

            <a href={site.phoneHref} className={styles.btnGhost}>
              {site.phone}
            </a>
          </div>
        </Reveal>

        <Reveal className={styles.side} delay={0.12}>
          <div className={styles.sideBlock}>
            <p className={styles.sideLabel}>Find us</p>
            <p className={styles.sideText}>{site.address}</p>
          </div>

          <div className={styles.sideBlock}>
            <p className={styles.sideLabel}>Cuisine</p>
            <p className={styles.sideText}>{site.cuisine}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}