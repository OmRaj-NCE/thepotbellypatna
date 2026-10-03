import Reveal from "../../ui/Reveal";
import styles from "./DiningPhilosophy.module.css";

export default function DiningPhilosophy() {
  return (
    <section
      className={styles.section}
      aria-labelledby="philosophy-title"
    >
      <div className={`container ${styles.inner}`}>
        <Reveal>
          <p className={styles.eyebrow}>Dining Philosophy</p>

          <blockquote className={styles.quote}>
            <p
              id="philosophy-title"
              className={`display-2 ${styles.quoteText}`}
            >
              We serve a cuisine that was never in a hurry.
              <em className="display-italic">
                {" "}We try not to be, either.
              </em>
            </p>
          </blockquote>

          <p className={styles.attribution}>The Potbelly · Patna</p>
        </Reveal>
      </div>
    </section>
  );
}