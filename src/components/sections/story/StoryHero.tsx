import { motion } from "framer-motion";

import styles from "./StoryHero.module.css";

/* ------------------------------------------------------------
   Text-first hero.
   No photograph — this page opens on typography and whitespace.
   ------------------------------------------------------------ */

const EASE = [0.22, 1, 0.36, 1] as const;

export default function StoryHero() {
  return (
    <section className={styles.hero} aria-labelledby="story-hero-title">
      <div className={`container ${styles.inner}`}>
        <motion.p
          className={styles.eyebrow}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          The Story
        </motion.p>

        <motion.h1
          id="story-hero-title"
          className={`display-1 ${styles.title}`}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.95, ease: EASE, delay: 0.15 }}
        >
          A cuisine
          <em className="display-italic"> with memory</em>.
        </motion.h1>

        <motion.p
          className={styles.lead}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.35 }}
        >
          Bihar's food was never built for a performance. It was built for a
          table that already knows the dish — for the smell of roasting litti,
          the sound of a chokha being mashed by hand, and the patient wait of
          an earthen pot sealed over a low flame.
        </motion.p>

        <motion.div
          className={styles.rule}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.1, ease: EASE, delay: 0.5 }}
          style={{ transformOrigin: "left center" }}
          aria-hidden="true"
        />
      </div>
    </section>
  );
}