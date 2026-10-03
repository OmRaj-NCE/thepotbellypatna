import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

import Reveal from "../../ui/Reveal";
import { site } from "../../../data/site";
import styles from "./ExperienceClosing.module.css";

export default function ExperienceClosing() {
  return (
    <section
      className={styles.section}
      aria-labelledby="experience-closing-title"
    >
      <div className={`container ${styles.inner}`}>
        <Reveal className={styles.copy}>
          <p className={styles.eyebrow}>Reserve</p>

          <h2
            id="experience-closing-title"
            className={`display-2 ${styles.title}`}
          >
            Set a table
            <em className="display-italic"> for the evening</em>.
          </h2>

          <p className={styles.body}>
            Tables can be reserved in advance. Call the restaurant directly,
            or place a request through the site.
          </p>

          <div className={styles.actions}>
            <Link to="/reservation" className={styles.btnPrimary}>
              Reserve a Table
              <ArrowUpRight size={16} strokeWidth={1.6} aria-hidden="true" />
            </Link>

            <a href={site.phoneHref} className={styles.btnGhost}>
              {site.phone}
            </a>
          </div>
        </Reveal>

        <Reveal className={styles.side} delay={0.12}>
          <div className={styles.sideBlock}>
            <p className={styles.sideLabel}>Find us</p>
            <p className={styles.sideText}>{site.address}</p>
          </div>

          <div className={styles.sideBlock}>
            <p className={styles.sideLabel}>Cuisine</p>
            <p className={styles.sideText}>{site.cuisine}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}