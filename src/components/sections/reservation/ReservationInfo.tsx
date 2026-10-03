import { Phone } from "lucide-react";

import Reveal from "../../ui/Reveal";
import { site } from "../../../data/site";
import styles from "./ReservationInfo.module.css";

export default function ReservationInfo() {
  return (
    <section
      className={`section ${styles.section}`}
      aria-labelledby="reservation-info-title"
    >
      <div className={`container ${styles.grid}`}>
        <Reveal className={styles.copy}>
          <p className="eyebrow">Prefer to call?</p>

          <h2
            id="reservation-info-title"
            className={`display-3 ${styles.title}`}
          >
            The kitchen answers
            <em className="display-italic"> the phone</em>.
          </h2>

          <p className={styles.body}>
            For same-day bookings, larger groups, or anything the form does
            not cover, calling is the fastest way to reach us.
          </p>

          <a href={site.phoneHref} className={styles.phoneLink}>
            <Phone size={18} strokeWidth={1.5} aria-hidden="true" />
            {site.phone}
          </a>
        </Reveal>

        <Reveal className={styles.notes} delay={0.1}>
          <div className={styles.noteBlock}>
            <p className={styles.noteLabel}>Find us</p>
            <p className={styles.noteText}>{site.address}</p>
          </div>

          <div className={styles.noteBlock}>
            <p className={styles.noteLabel}>Cuisine</p>
            <p className={styles.noteText}>{site.cuisine}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}