import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

import Reveal from "../ui/Reveal";
import { images } from "../../data/images";
import { site } from "../../data/site";
import styles from "./TheSetting.module.css";

export default function TheSetting() {
  return (
    <section className={styles.section} aria-labelledby="setting-title">
      <div className={`container ${styles.grid}`}>
        <Reveal className={styles.copy}>
          <p className={styles.eyebrow}>The Setting</p>

          <h2 id="setting-title" className={`display-3 ${styles.title}`}>
            Inside the
            <em className="display-italic"> Bihar Museum</em>.
          </h2>

          <p className={styles.body}>
            The Potbelly sits on Bailey Road, within the grounds of the Bihar
            Museum — a dining room in the middle of the state's own archive,
            with a menu that keeps that same conversation going.
          </p>

          <p className={styles.address}>{site.address}</p>

          <Link to="/experience" className={styles.link}>
            The experience
            <ArrowUpRight size={16} strokeWidth={1.6} aria-hidden="true" />
          </Link>
        </Reveal>

        <Reveal className={styles.figure} delay={0.15}>
          <img
            src={images.setting.src}
            alt={images.setting.alt}
            className={styles.image}
            loading="lazy"
            decoding="async"
          />
        </Reveal>
      </div>
    </section>
  );
}