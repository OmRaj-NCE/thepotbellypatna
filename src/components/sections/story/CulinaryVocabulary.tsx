import Reveal from "../../ui/Reveal";
import styles from "./CulinaryVocabulary.module.css";

/* ------------------------------------------------------------
   A short glossary of the ingredients and techniques that
   appear on the menu. Factual definitions only.
   ------------------------------------------------------------ */

type Entry = {
  term: string;
  gloss: string;
  definition: string;
};

const entries: Entry[] = [
  {
    term: "Sattu",
    gloss: "roasted gram flour",
    definition:
      "Roasted Bengal gram, ground to a coarse flour. Eaten across Bihar as a drink, a stuffing, a paratha filling and a binder.",
  },
  {
    term: "Litti",
    gloss: "sattu-stuffed wheat balls",
    definition:
      "Whole wheat dough balls stuffed with spiced sattu, traditionally roasted over open flame or cow-dung cakes, then cracked open and eaten with chokha and ghee.",
  },
  {
    term: "Chokha",
    gloss: "hand-mashed vegetables",
    definition:
      "Aubergine, potato, tomato or parwal, roasted, then mashed by hand with mustard oil, chilli, onion and coriander. Served as a side, a main, or a meal on its own.",
  },
  {
    term: "Ahuna",
    gloss: "sealed-pot cooking",
    definition:
      "Meat and spices sealed inside an earthen pot and slow-cooked over low heat — sometimes buried in the ground — so that the steam never escapes and the meat cooks in its own moisture.",
  },
  {
    term: "Sarson",
    gloss: "mustard",
    definition:
      "Both the oil and the paste. Mustard oil is the everyday cooking fat of Bihar; mustard paste — ground with green chilli and a little water — is the base of the region's fish curries.",
  },
  {
    term: "Marua",
    gloss: "finger millet",
    definition:
      "A hardy millet ground into flour and used for pooris and rotis, especially in the rural districts. Nutty, dense, and traditionally eaten with chokha.",
  },
  {
    term: "Teesi",
    gloss: "flax-seed chutney",
    definition:
      "Roasted flax seeds ground into a coarse, oily chutney with garlic, chilli and salt. Served as an accompaniment to pooris, parathas and rice.",
  },
  {
    term: "Ol",
    gloss: "yam pickle",
    definition:
      "Yam, cut small and pickled in mustard oil and spices. A pantry staple — sharp, hot, and eaten in tiny quantities alongside a larger plate.",
  },
  {
    term: "Seethaphal",
    gloss: "pumpkin",
    definition:
      "Cooked into a simple, slightly sweet sabzi and served with pooris and parathas. Common across the plains, especially in winter.",
  },
  {
    term: "Poha",
    gloss: "flattened rice",
    definition:
      "Rice parboiled and flattened into dry flakes. Eaten across Bihar as a breakfast, a snack, and — roasted — as an accompaniment to slow-cooked meat.",
  },
];

export default function CulinaryVocabulary() {
  return (
    <section
      className={`section ${styles.section}`}
      aria-labelledby="vocab-title"
    >
      <div className="container">
        <Reveal className={styles.head}>
          <p className="eyebrow">A Short Glossary</p>
          <h2 id="vocab-title" className={`display-2 ${styles.title}`}>
            The vocabulary
            <em className="display-italic"> of the kitchen</em>.
          </h2>
          <p className={`lead ${styles.subtitle}`}>
            Ten terms that appear across the menu. Learn them once and the
            whole kitchen opens up.
          </p>
        </Reveal>

        <dl className={styles.list}>
          {entries.map((entry, i) => (
            <Reveal key={entry.term} delay={i * 0.03}>
              <div className={styles.row}>
                <div className={styles.termCell}>
                  <dt className={styles.term}>{entry.term}</dt>
                  <span className={styles.gloss}>{entry.gloss}</span>
                </div>
                <dd className={styles.definition}>{entry.definition}</dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}