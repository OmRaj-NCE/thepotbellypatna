import Reveal from "../../ui/Reveal";
import { images } from "../../../data/images";
import styles from "./TheOccasion.module.css";

/* ------------------------------------------------------------
   The kinds of evenings the room suits.
   Presented as a numbered list of short paragraphs, no claims
   about capacity, private hire, or set menus.
   ------------------------------------------------------------ */

type Occasion = {
  title: string;
  body: string;
};

const occasions: Occasion[] = [
  {
    title: "A long lunch",
    body:
      "The kitchen moves at its own pace. A shared platter, a biryani, a cooler on the side — a mid-afternoon meal that stretches without needing to be finished quickly.",
  },
  {
    title: "A dinner with guests",
    body:
      "The menu is built for passing plates. Two guests can order four dishes and share all of them; four guests can order eight and do the same.",
  },
  {
    title: "A quiet solo meal",
    body:
      "A seat at the table for one, a platter and a drink. Nothing about the room insists on company.",
  },
  {
    title: "A slow evening",
    body:
      "The light stays low. The sound stays soft. Guests are welcome to stay after the meal, and there is no rush to clear the table.",
  },
];

export default function TheOccasion() {
  return (
    <section
      className={`section ${styles.section}`}
      aria-labelledby="occasion-title"
    >
      <div className={`container ${styles.grid}`}>
        <Reveal className={styles.copy}>
          <p className="eyebrow">The Occasion</p>
          <h2 id="occasion-title" className={`display-3 ${styles.title}`}>
            Built for an evening
            <em className="display-italic"> rather than a quick meal</em>.
          </h2>
          <p className={`lead ${styles.lead}`}>
            The room suits a handful of dining rhythms. None of them require
            a special occasion.
          </p>

          <img
            src={images.experienceOccasion.src}
            alt={images.experienceOccasion.alt}
            className={styles.image}
            loading="lazy"
            decoding="async"
          />
        </Reveal>

        <ol className={styles.list}>
          {occasions.map((occasion, i) => (
            <Reveal key={occasion.title} delay={i * 0.05}>
              <li className={styles.item}>
                <span className={styles.num}>
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className={styles.body}>
                  <h3 className={`display-4 ${styles.itemTitle}`}>
                    {occasion.title}
                  </h3>
                  <p className={styles.text}>{occasion.body}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}