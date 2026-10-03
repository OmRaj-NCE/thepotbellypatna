import Reveal from "../../ui/Reveal";
import styles from "./TraditionalInfluences.module.css";

/* ------------------------------------------------------------
   Six techniques that define the Bihari kitchen.
   Presented as an editorial index, not cards.
   ------------------------------------------------------------ */

type Influence = {
  name: string;
  gloss: string;
  body: string;
};

const influences: Influence[] = [
  {
    name: "Open-flame roasting",
    gloss: "chulha · litti · baigan",
    body:
      "Vegetables and litti are roasted directly over flame — a chulha, a sigri, or cow-dung cakes. The char that results is not a defect. It is the flavour.",
  },
  {
    name: "Sealed earthen pots",
    gloss: "ahuna",
    body:
      "Meat and spices are sealed inside an earthen pot and cooked slowly, sometimes buried, so the steam never escapes. The meat cooks in its own moisture and comes out tender.",
  },
  {
    name: "Hand-mashing",
    gloss: "chokha",
    body:
      "Chokha is mashed by hand, not in a blender. The uneven texture — some pieces smooth, some still holding their shape — is the point.",
  },
  {
    name: "Mustard, oil and paste",
    gloss: "sarson",
    body:
      "Mustard oil is the everyday fat of the Bihari kitchen. Ground with green chilli, it becomes the base of the region's fish curries and a sharpening agent for pickles and chokhas.",
  },
  {
    name: "Dry-roasted masalas",
    gloss: "khada masala",
    body:
      "Whole spices — coriander, cumin, dried red chilli, black pepper — are dry-roasted and ground as needed, not bought pre-ground. The aroma of a freshly cracked masala is a Bihari kitchen signature.",
  },
  {
    name: "The chutney and the pickle",
    gloss: "teesi · ol · tomato",
    body:
      "Nothing leaves the kitchen unaccompanied. Every plate arrives with a chutney, a pickle or a chokha — sharp, sour, hot or oily — designed to be eaten in small amounts alongside the main dish.",
  },
];

export default function TraditionalInfluences() {
  return (
    <section
      className={`section ${styles.section}`}
      aria-labelledby="influences-title"
    >
      <div className="container">
        <Reveal className={styles.head}>
          <p className="eyebrow">Traditional Influences</p>
          <h2 id="influences-title" className={`display-2 ${styles.title}`}>
            Six techniques
            <em className="display-italic"> of the Bihari kitchen</em>.
          </h2>
          <p className={`lead ${styles.subtitle}`}>
            None of these are refinements. Each one exists because someone
            once needed to cook a particular meal with what was at hand.
          </p>
        </Reveal>

        <ul className={styles.list}>
          {influences.map((item, i) => (
            <Reveal key={item.name} delay={i * 0.05}>
              <li className={styles.row}>
                <span className={styles.num}>
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className={styles.body}>
                  <h3 className={`display-4 ${styles.name}`}>{item.name}</h3>
                  <p className={styles.gloss}>{item.gloss}</p>
                  <p className={styles.text}>{item.body}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}