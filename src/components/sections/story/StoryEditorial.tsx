import Reveal from "../../ui/Reveal";
import { images } from "../../../data/images";
import styles from "./StoryEditorial.module.css";

export default function StoryEditorial() {
  return (
    <section
      className={styles.section}
      aria-labelledby="story-editorial-title"
    >
      <div className={styles.frame}>
        <img
          src={images.storyHearth.src}
          alt={images.storyHearth.alt}
          className={styles.image}
          loading="lazy"
          decoding="async"
        />
        <div className={styles.overlay} aria-hidden="true" />

        <div className={`container ${styles.content}`}>
          <Reveal>
            <p className={styles.eyebrow}>The Hearth</p>
            <h2
              id="story-editorial-title"
              className={`display-2 ${styles.title}`}
            >
              The smell of roasting litti
              <em className="display-italic"> is the smell of home</em>.
            </h2>
            <p className={styles.body}>
              Nothing in the Bihari kitchen announces itself more clearly
              than a litti over open flame — the crack of the crust, the
              smoke curling off the charred surface, the sharp smell of
              mustard oil rising from the chokha beside it.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}