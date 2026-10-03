import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";

import styles from "./ScrollProgress.module.css";

/* ------------------------------------------------------------
   A 2px progress bar pinned to the top of the viewport.
   Fills left-to-right as the page scrolls.
   Hidden for users who prefer reduced motion.
   ------------------------------------------------------------ */

export default function ScrollProgress() {
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll();

  /* Springs the progress so the bar doesn't stutter on fast scrolls. */
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    restDelta: 0.001,
  });

  if (reduceMotion) return null;

  return (
    <motion.div
      className={styles.bar}
      style={{ scaleX }}
      aria-hidden="true"
    />
  );
}