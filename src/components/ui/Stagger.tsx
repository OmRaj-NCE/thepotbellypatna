import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  /** Time between each child's reveal, in seconds. */
  step?: number;
  /** Initial delay before the first child animates. */
  delay?: number;
  className?: string;
};

/* ------------------------------------------------------------
   Wraps a group of children and staggers their entrance.
   Each direct child must be wrapped in <Stagger.Item>.

   Usage:
     <Stagger step={0.06}>
       <Stagger.Item>…</Stagger.Item>
       <Stagger.Item>…</Stagger.Item>
     </Stagger>
   ------------------------------------------------------------ */

const containerVariants = (step: number, delay: number) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: step,
      delayChildren: delay,
    },
  },
});

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function Stagger({
  children,
  step = 0.06,
  delay = 0,
  className,
}: Props) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={containerVariants(step, delay)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
    >
      {children}
    </motion.div>
  );
}

/* ---------- Child item ---------- */

type ItemProps = {
  children: ReactNode;
  className?: string;
};

function Item({ children, className }: ItemProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div className={className} variants={itemVariants}>
      {children}
    </motion.div>
  );
}

Stagger.Item = Item;