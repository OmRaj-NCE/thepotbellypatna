import Reveal from "../../ui/Reveal";
import styles from "./TheFlavours.module.css";

/* ------------------------------------------------------------
   Four flavour profiles of the Bihari kitchen.
   General culinary facts, no claims about sourcing.
   ------------------------------------------------------------ */

type Flavour = {
  name: string;
  gloss: string;
  body: string;
};

const flavours: Flavour[] = [
  {
    name: "Mustard",
    gloss: "sarson",
    body:
      "Sharp, pale yellow, and unmistakable. Mustard oil and ground mustard paste carry the region's fish curries and sharpen the pickles. It is the flavour that announces a Bihari plate before you taste it.",
  },
  {
    name: "Smoke",
    gloss: "chulha",
    body:
      "The flavour of open flame. Litti roasted over a chulha, baigan charred for a chokha, whole spices dry-roasted before grinding. Smoke is not a garnish in this kitchen — it is a base note.",
  },
  {
    name: "Earth",
    gloss: "sattu · chokha",
    body:
      "Ground gram, roasted and stored. Mashed vegetables, cooled, spiced, folded by hand. The earthy half of the cuisine — filling, mild, and always present on the plate as a base for the sharper flavours around it.",
  },
  {
    name: "Sharp",
    gloss: "teesi · ol · tomato",
    body:
      "The chutneys and pickles that accompany nearly everything. Flax-seed chutney, yam pickle, raw tomato and coriander. Small amounts, taken directly with each bite, kept at the side of the plate rather than mixed in.",
  },
];

export default function TheFlavours() {
  return (
    <section
      className={`section ${styles.section}`}
      aria-labelledby="flavours-title"
    >
      <div className="container">
        <Reveal className={styles.head}>
          <p className="eyebrow">The Flavours</p>
          <h2 id="flavours-title" className={`display-2 ${styles.title}`}>
            Four registers
            <em className="display-italic"> of the Bihari kitchen</em>.
          </h2>
          <p className={`lead ${styles.subtitle}`}>
            Everything on the menu sits within one of these four families of
            flavour. The combinations change; the registers do not.
          </p>
        </Reveal>

        <div className={styles.grid}>
          {flavours.map((flavour, i) => (
            <Reveal key={flavour.name} delay={i * 0.06}>
              <article className={styles.card}>
                <header className={styles.cardHead}>
                  <h3 className={`display-3 ${styles.cardTitle}`}>
                    {flavour.name}
                  </h3>
                  <p className={styles.gloss}>{flavour.gloss}</p>
                </header>

                <p className={styles.body}>{flavour.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}