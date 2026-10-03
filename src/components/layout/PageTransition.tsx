import { Outlet, useLocation } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";

import styles from "./PageTransition.module.css";

/* ------------------------------------------------------------
   Wraps every route's content in a subtle fade-and-lift.
   Uses the route pathname as a React `key`, so changing routes
   unmounts the old tree and mounts a fresh one — which replays
   the entrance animation automatically.
   ------------------------------------------------------------ */

export default function PageTransition() {
  const { pathname } = useLocation();
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      key={pathname}
      className={styles.wrap}
      initial={reduceMotion ? false : { opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <Outlet />
    </motion.div>
  );
}