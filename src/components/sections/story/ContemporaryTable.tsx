import Reveal from "../../ui/Reveal";
import { images } from "../../../data/images";
import styles from "./ContemporaryTable.module.css";

export default function ContemporaryTable() {
  return (
    <section
      className={`section ${styles.section}`}
      aria-labelledby="contemporary-title"
    >
      <div className={`container ${styles.grid}`}>
        <Reveal className={styles.copy}>
          <p className="eyebrow">Contemporary Presentation</p>
          <h2
            id="contemporary-title"
            className={`display-3 ${styles.title}`}
          >
            Traditional flavours, arranged
            <em className="display-italic"> for a modern table</em>.
          </h2>

          <p className={styles.para}>
            The cooking has not changed. What has changed is the way it is
            served — plated with space around it, lit warmly, brought to a
            table that is set for a slower evening rather than a quick meal.
          </p>

          <p className={styles.para}>
            A chokha arrives in a small dish beside a platter, not mixed in.
            A pickle is spooned to one corner of the plate, not stirred
            through. The chutneys, the pooris, the litti and the meat sit on
            the same surface — visible to each other, but never merged. The
            guest chooses how the flavours combine.
          </p>

          <p className={styles.para}>
            Nothing is decorative. Everything on the plate is meant to be
            eaten, and the composition on the plate is a small map of the
            Bihari meal itself: a main, a mash, a chutney, a pickle, and
            something to carry it to the mouth.
          </p>
        </Reveal>

        <Reveal className={styles.figure} delay={0.12}>
          <img
            src={images.storyTable.src}
            alt={images.storyTable.alt}
            className={styles.image}
            loading="lazy"
            decoding="async"
          />
          <p className={styles.caption}>
            Chokha, pooris and pickle — arranged to be shared, not merged.
          </p>
        </Reveal>
      </div>
    </section>
  );
}