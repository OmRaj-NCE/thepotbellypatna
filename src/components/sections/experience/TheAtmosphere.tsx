import Reveal from "../../ui/Reveal";
import { images } from "../../../data/images";
import styles from "./TheAtmosphere.module.css";

export default function TheAtmosphere() {
  return (
    <section
      className={styles.section}
      aria-labelledby="atmosphere-title"
    >
      <div className={styles.frame}>
        <img
          src={images.experienceAtmosphere.src}
          alt={images.experienceAtmosphere.alt}
          className={styles.image}
          loading="lazy"
          decoding="async"
        />
        <div className={styles.overlay} aria-hidden="true" />

        <div className={`container ${styles.content}`}>
          <Reveal>
            <p className={styles.eyebrow}>The Atmosphere</p>

            <blockquote className={styles.quote}>
              <p
                id="atmosphere-title"
                className={`display-2 ${styles.quoteText}`}
              >
                Warm light, low sound,
                <em className="display-italic"> and a room that lets you sit</em>.
              </p>
            </blockquote>

            <p className={styles.body}>
              Dining rooms are built for a purpose. This one is built for an
              evening — not a quick meal, not a meeting. The light is set
              low, the sound is kept soft, and the tables are spaced so a
              conversation can be had without raising a voice.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}