import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";

import { images } from "../../data/images";
import { site } from "../../data/site";
import styles from "./Hero.module.css";

/* ------------------------------------------------------------
   Cinematic full-height hero.
   Background image scales subtly on scroll; the copy is
   revealed in a staggered sequence.
   ------------------------------------------------------------ */

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const wrapRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ["start start", "end start"],
  });

  const bgScale = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [1, 1] : [1, 1.14]
  );
  const bgY = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? ["0%", "0%"] : ["0%", "10%"]
  );

  return (
    <section ref={wrapRef} className={styles.hero} aria-labelledby="hero-title">
      <motion.div
        className={styles.bg}
        style={{ scale: bgScale, y: bgY }}
        aria-hidden="true"
      >
        <img
          src={images.hero.src}
          alt=""
          className={styles.bgImg}
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
        <div className={styles.overlay} />
      </motion.div>

      <div className={`container ${styles.inner}`}>
        <motion.p
          className={styles.venue}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
        >
          <span className={styles.venueDot} aria-hidden="true" />
          {site.venue}
        </motion.p>

        <motion.h1
          id="hero-title"
          className={`display-1 ${styles.title}`}
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: EASE, delay: 0.2 }}
        >
          {site.name}
        </motion.h1>

        <motion.p
          className={styles.hindi}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: EASE, delay: 0.4 }}
        >
          {site.nameHindi} — {site.cityHindi}
        </motion.p>

        <motion.p
          className={styles.tagline}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: EASE, delay: 0.55 }}
        >
          {site.tagline}
        </motion.p>

        <motion.div
          className={styles.ctas}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: EASE, delay: 0.7 }}
        >
          <Link to="/reservation" className={`${styles.btn} ${styles.btnPrimary}`}>
            Reserve a Table
            <ArrowUpRight size={16} strokeWidth={1.6} aria-hidden="true" />
          </Link>

          <Link to="/menu" className={`${styles.btn} ${styles.btnGhost}`}>
            Explore the Menu
          </Link>
        </motion.div>
      </div>

      <motion.div
        className={styles.scrollCue}
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: EASE, delay: 1 }}
      >
        <span className={styles.scrollLabel}>Scroll</span>
        <motion.span
          className={styles.scrollIcon}
          animate={
            reduceMotion
              ? {}
              : { y: [0, 6, 0], transition: { duration: 2.4, repeat: Infinity, ease: "easeInOut" } }
          }
        >
          <ArrowDown size={14} strokeWidth={1.6} />
        </motion.span>
      </motion.div>
    </section>
  );
}