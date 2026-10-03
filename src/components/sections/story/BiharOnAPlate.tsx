import Reveal from "../../ui/Reveal";
import styles from "./BiharOnAPlate.module.css";

export default function BiharOnAPlate() {
  return (
    <section
      className={`section ${styles.section}`}
      aria-labelledby="bihar-title"
    >
      <div className={`container ${styles.grid}`}>
        <Reveal className={styles.headCol}>
          <p className="eyebrow">Bihar on a Plate</p>
          <h2 id="bihar-title" className={`display-3 ${styles.title}`}>
            Every part of the meal has a reason to be there.
          </h2>
        </Reveal>

        <Reveal className={styles.bodyCol} delay={0.1}>
          <p className={styles.para}>
            Bihari cooking is a cuisine of preservation, patience and memory.
            Sattu — roasted gram flour — exists because it keeps. Litti exists
            because sattu keeps. Chokha exists because the vegetable that came
            in that week could be mashed, spiced and served the same evening.
            The old logic of the kitchen was simple: nothing wasted, nothing
            hurried.
          </p>

          <figure className={styles.pullQuote}>
            <blockquote>
              <p className="display-3">
                Bihar's food is not plated for performance. It is cooked for a
                table that already knows it.
              </p>
            </blockquote>
          </figure>

          <p className={styles.para}>
            The techniques that make the cuisine what it is — open-flame
            roasting, sealing meat into earthen pots, hand-mashing, the
            everyday use of mustard oil — were not refinements. They were
            solutions. Cooking over a chulha meant smoke. Storing food meant
            pickles. Cooking slowly meant cooking once, and cooking well.
          </p>

          <p className={styles.para}>
            When a cuisine is that old, its flavours do not need to be
            modernised. They only need to be served honestly — with the smoke
            still on the plate, the chokha still mashed by hand, and the
            mustard still sharp in the corner of the dish.
          </p>
        </Reveal>
      </div>
    </section>
  );
}