import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

import Reveal from "../ui/Reveal";
import { images } from "../../data/images";
import styles from "./ExperienceTeaser.module.css";

export default function ExperienceTeaser() {
  return (
    <section className={styles.section} aria-labelledby="experience-title">
      <div className={`container ${styles.grid}`}>
        <Reveal className={styles.figure}>
          <img
            src={images.experience.src}
            alt={images.experience.alt}
            className={styles.image}
            loading="lazy"
            decoding="async"
          />
        </Reveal>

        <Reveal className={styles.copy} delay={0.12}>
          <p className="eyebrow">The Experience</p>

          <h2 id="experience-title" className={`display-3 ${styles.title}`}>
            Plates passed across
            <em className="display-italic"> the table</em>.
          </h2>

          <p className={styles.body}>
            The menu is built for sharing — chokha, pooris and platters set
            between guests, cooled drinks on the side, and the unhurried
            rhythm of a Bihari meal in a contemporary room.
          </p>

          <Link to="/experience" className={styles.link}>
            Explore the experience
            <ArrowUpRight size={16} strokeWidth={1.6} aria-hidden="true" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}