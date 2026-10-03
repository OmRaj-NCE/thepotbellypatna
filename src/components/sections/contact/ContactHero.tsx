import { motion } from "framer-motion";

import { site } from "../../../data/site";
import styles from "./ContactHero.module.css";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function ContactHero() {
  return (
    <section className={styles.hero} aria-labelledby="contact-hero-title">
      <div className={`container ${styles.inner}`}>
        <motion.p
          className={styles.eyebrow}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          Contact
        </motion.p>

        <motion.h1
          id="contact-hero-title"
          className={`display-1 ${styles.title}`}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.95, ease: EASE, delay: 0.15 }}
        >
          Find us
          <em className="display-italic"> inside the Bihar Museum</em>.
        </motion.h1>

        <motion.p
          className={styles.lead}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.35 }}
        >
          {site.address}
        </motion.p>
      </div>
    </section>
  );
}