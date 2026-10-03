import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type Variant = "up" | "fade" | "mask";

type Props = {
  children: ReactNode;
  /** Seconds to delay the reveal. */
  delay?: number;
  /** Pixel distance for the "up" variant. */
  y?: number;
  /** Animation style. Defaults to "up". */
  variant?: Variant;
  /** Fraction of the element that must be visible before triggering. */
  amount?: number;
  /** Reveal once and stay. Set false to re-trigger on re-entry. */
  once?: boolean;
  className?: string;
};

/* ------------------------------------------------------------
   Scroll-triggered reveal.
   - "up"   — fades in and lifts from below (default)
   - "fade" — pure opacity, no motion
   - "mask" — reveals top-to-bottom via a clip-path mask

   Respects prefers-reduced-motion: renders children directly
   with no animation when motion is reduced.
   ------------------------------------------------------------ */

export default function Reveal({
  children,
  delay = 0,
  y = 28,
  variant = "up",
  amount = 0.15,
  once = true,
  className,
}: Props) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const transition = {
    duration: 0.75,
    delay,
    ease: [0.22, 1, 0.36, 1] as const,
  };

  if (variant === "fade") {
    return (
      <motion.div
        className={className}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once, amount }}
        transition={transition}
      >
        {children}
      </motion.div>
    );
  }

  if (variant === "mask") {
    return (
      <motion.div
        className={className}
        initial={{ clipPath: "inset(100% 0% 0% 0%)", opacity: 0.6 }}
        whileInView={{ clipPath: "inset(0% 0% 0% 0%)", opacity: 1 }}
        viewport={{ once, amount }}
        transition={{ ...transition, duration: 0.9 }}
      >
        {children}
      </motion.div>
    );
  }

  /* Default: "up" */
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}