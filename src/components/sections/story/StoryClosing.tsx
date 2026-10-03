import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

import Reveal from "../../ui/Reveal";
import styles from "./StoryClosing.module.css";

export default function StoryClosing() {
  return (
    <section
      className={styles.section}
      aria-labelledby="story-closing-title"
    >
      <div className={`container ${styles.inner}`}>
        <Reveal className={styles.copy}>
          <p className={styles.eyebrow}>Continue</p>

          <h2 id="story-closing-title" className={`display-2 ${styles.title}`}>
            See it
            <em className="display-italic"> on the plate</em>.
          </h2>

          <p className={styles.body}>
            The story ends where the meal begins. Browse the full menu, or
            read more about the dining experience at the Bihar Museum.
          </p>
        </Reveal>

        <Reveal className={styles.actions} delay={0.1}>
          <Link to="/menu" className={styles.btnPrimary}>
            Explore the Menu
            <ArrowUpRight size={16} strokeWidth={1.6} aria-hidden="true" />
          </Link>

          <Link to="/experience" className={styles.btnGhost}>
            The Experience
            <ArrowUpRight size={16} strokeWidth={1.6} aria-hidden="true" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}