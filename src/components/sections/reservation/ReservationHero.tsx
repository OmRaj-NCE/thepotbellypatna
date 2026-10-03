import { motion } from "framer-motion";

import { site } from "../../../data/site";
import styles from "./ReservationHero.module.css";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function ReservationHero() {
  return (
    <section
      className={styles.hero}
      aria-labelledby="reservation-hero-title"
    >
      <div className={`container ${styles.inner}`}>
        <motion.p
          className={styles.eyebrow}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          Reservation
        </motion.p>

        <motion.h1
          id="reservation-hero-title"
          className={`display-1 ${styles.title}`}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.95, ease: EASE, delay: 0.15 }}
        >
          Reserve
          <em className="display-italic"> a table</em>.
        </motion.h1>

        <motion.p
          className={styles.lead}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.35 }}
        >
          Tell us the date, the time and how many guests, and we will arrange
          the table. For same-day bookings, please call the restaurant
          directly on{" "}
          <a href={site.phoneHref} className={styles.phoneLink}>
            {site.phone}
          </a>
          .
        </motion.p>

        <motion.p
          className={styles.notice}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.6 }}
        >
          Note: this site is not yet connected to the restaurant's booking
          system. Requests placed here are not transmitted — please call the
          restaurant to confirm.
        </motion.p>
      </div>
    </section>
  );
}