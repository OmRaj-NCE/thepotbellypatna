import { motion, useReducedMotion } from "framer-motion";

import styles from "./RevealImage.module.css";

/* ------------------------------------------------------------
   An image that reveals itself with a clip-path mask on scroll.
   Optionally wraps in a fixed aspect-ratio frame.
   ------------------------------------------------------------ */

type Props = {
  src: string;
  alt: string;
  /** Aspect ratio string, e.g. "4 / 5". Omit for natural sizing. */
  ratio?: string;
  /** Delay before the animation begins, in seconds. */
  delay?: number;
  /** Set true for above-the-fold images to skip lazy loading. */
  priority?: boolean;
  /** Object-position, e.g. "center", "top", "20% 40%". */
  position?: string;
  className?: string;
};

export default function RevealImage({
  src,
  alt,
  ratio,
  delay = 0,
  priority = false,
  position = "center",
  className,
}: Props) {
  const reduceMotion = useReducedMotion();

  const frameStyle = ratio ? { aspectRatio: ratio } : undefined;

  if (reduceMotion) {
    return (
      <div
        className={`${styles.frame} ${className ?? ""}`}
        style={frameStyle}
      >
        <img
          src={src}
          alt={alt}
          className={styles.img}
          style={{ objectPosition: position }}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
        />
      </div>
    );
  }

  return (
    <motion.div
      className={`${styles.frame} ${className ?? ""}`}
      style={frameStyle}
      initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
      whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1.05, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.img
        src={src}
        alt={alt}
        className={styles.img}
        style={{ objectPosition: position }}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        initial={{ scale: 1.08 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.4, delay, ease: [0.22, 1, 0.36, 1] }}
      />
    </motion.div>
  );
}