import Reveal from "../ui/Reveal";
import { images } from "../../data/images";
import styles from "./FoodEditorial.module.css";

/* ------------------------------------------------------------
   A magazine-style full-bleed image with overlaid serif type.
   ------------------------------------------------------------ */

export default function FoodEditorial() {
  return (
    <section className={styles.section} aria-labelledby="editorial-title">
      <div className={styles.frame}>
        <img
          src={images.editorial.src}
          alt={images.editorial.alt}
          className={styles.image}
          loading="lazy"
          decoding="async"
        />
        <div className={styles.overlay} aria-hidden="true" />

        <div className={`container ${styles.content}`}>
          <Reveal>
            <p className={styles.eyebrow}>The Slow Pot</p>
            <h2 id="editorial-title" className={`display-2 ${styles.title}`}>
              Opened
              <em className="display-italic"> at the table</em>.
            </h2>
            <p className={styles.body}>
              Ahuna Mutton is cooked in a sealed earthen pot and opened only
              when it reaches the table — the smoke released in the moment,
              not the kitchen.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}