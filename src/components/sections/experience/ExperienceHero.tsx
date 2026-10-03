import { motion } from "framer-motion";

import { images } from "../../../data/images";
import styles from "./ExperienceHero.module.css";

/* ------------------------------------------------------------
   Split hero. Half image, half typography — asymmetric.
   Different from the homepage (full-bleed) and the Story page
   (text-only).
   ------------------------------------------------------------ */

const EASE = [0.22, 1, 0.36, 1] as const;

export default function ExperienceHero() {
  return (
    <section className={styles.hero} aria-labelledby="experience-hero-title">
      <div className={`container ${styles.grid}`}>
        <motion.div
          className={styles.copy}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE }}
        >
          <p className={styles.eyebrow}>The Experience</p>

          <h1
            id="experience-hero-title"
            className={`display-2 ${styles.title}`}
          >
            An evening
            <em className="display-italic"> paced for the table</em>.
          </h1>

          <p className={styles.lead}>
            Dinner at The Potbelly is not a single dish. It is a sequence —
            coolers first, small plates second, the platter at the centre,
            and a slow close. The room is built for that rhythm: low light,
            warm sound, plates meant to be passed.
          </p>

          <p className={styles.detail}>
            Inside the Bihar Museum · Bailey Road · Patna
          </p>
        </motion.div>

        <motion.figure
          className={styles.figure}
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: EASE, delay: 0.2 }}
        >
          <img
            src={images.experienceHero.src}
            alt={images.experienceHero.alt}
            className={styles.image}
            loading="eager"
            decoding="async"
          />
        </motion.figure>
      </div>
    </section>
  );
}