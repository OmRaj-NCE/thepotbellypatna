import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

import Reveal from "../ui/Reveal";
import { images } from "../../data/images";
import styles from "./Introduction.module.css";

export default function Introduction() {
  return (
    <section className={`section ${styles.section}`} aria-labelledby="intro-title">
      <div className={`container ${styles.grid}`}>
        <Reveal className={styles.copy}>
          <p className="eyebrow">The Potbelly · Patna</p>

          <h2 id="intro-title" className={`display-3 ${styles.title}`}>
            A slow, patient cuisine, served
            <em className="display-italic"> unhurried</em>.
          </h2>

          <p className={`lead ${styles.lead}`}>
            Bihar's cooking is patient. Sattu roasted over open flame.
            Chokha mashed by hand. Mutton sealed into an earthen pot and
            opened only when it is ready. At The Potbelly, we cook that
            way — and plate it for the contemporary table.
          </p>

          <p className={`body body--muted ${styles.para}`}>
            Inside the Bihar Museum, we serve a menu that moves between
            starters and slow-cooked platters, between desi coolers and
            yakhni biryanis, without ever leaving the state's culinary
            vocabulary behind.
          </p>

          <Link to="/story" className={styles.link}>
            Read the story
            <ArrowUpRight size={16} strokeWidth={1.6} aria-hidden="true" />
          </Link>
        </Reveal>

        <Reveal className={styles.figure} delay={0.15}>
          <img
            src={images.intro.src}
            alt={images.intro.alt}
            className={styles.image}
            loading="lazy"
            decoding="async"
          />
          <p className={styles.caption}>
            Bihar on a plate — sattu, chokha, mustard, earthen smoke.
          </p>
        </Reveal>
      </div>
    </section>
  );
}