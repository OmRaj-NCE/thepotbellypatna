import Reveal from "../../ui/Reveal";
import styles from "./TheSequence.module.css";

/* ------------------------------------------------------------
   Five moments that form the rhythm of an evening at
   The Potbelly. The visual centrepiece of the page.
   ------------------------------------------------------------ */

type Moment = {
  step: string;
  title: string;
  body: string;
  pair: string;
};

const moments: Moment[] = [
  {
    step: "I",
    title: "The drink arrives",
    body:
      "A sattu cooler, a lassi, or an iced tea. Nothing sweetened into a dessert. The drink sets the temperature of the meal — cool, savoury, unhurried.",
    pair: "Sattu Cooler · Lassi · Aam Panna",
  },
  {
    step: "II",
    title: "The small plates",
    body:
      "Fritters, kachris and dal pockets, most served with the house chutneys and a parwal chokha. They are meant to be eaten with the fingers and passed around the table.",
    pair: "Saboodana Basket · Pakora Basket · Baggia",
  },
  {
    step: "III",
    title: "The platter at the centre",
    body:
      "Litti, chokha, slow-cooked meat. This is the length of the meal — the dish that the table stops talking for. Served to share, or served as one person's whole evening.",
    pair: "Litti Chicken · Ahuna Mutton · Mutton Chaamp",
  },
  {
    step: "IV",
    title: "The main course",
    body:
      "A biryani cooked in an earthen pot, or a mustard fish from the plains. Ordered when the table is still hungry — or split as the second half of the meal.",
    pair: "Mutton Biryani (Yakhni) · Sarson Machhli",
  },
  {
    step: "V",
    title: "The close",
    body:
      "Nothing arrives at the table unless it is asked for. The meal ends when the table is done, not when the next course is ready.",
    pair: "",
  },
];

export default function TheSequence() {
  return (
    <section className={styles.section} aria-labelledby="sequence-title">
      <div className={`container ${styles.inner}`}>
        <Reveal className={styles.head}>
          <p className={styles.eyebrow}>The Sequence</p>
          <h2
            id="sequence-title"
            className={`display-2 ${styles.title}`}
          >
            A meal at The Potbelly
            <em className="display-italic"> moves in five parts</em>.
          </h2>
          <p className={styles.subtitle}>
            Not a fixed menu — a shape. The order is what a Bihari meal has
            always had.
          </p>
        </Reveal>

        <ol className={styles.list}>
          {moments.map((moment, i) => (
            <Reveal key={moment.step} delay={i * 0.06}>
              <li className={styles.moment}>
                <span className={styles.step}>{moment.step}</span>

                <div className={styles.body}>
                  <h3 className={`display-3 ${styles.momentTitle}`}>
                    {moment.title}
                  </h3>
                  <p className={styles.text}>{moment.body}</p>
                  {moment.pair && (
                    <p className={styles.pair}>{moment.pair}</p>
                  )}
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}