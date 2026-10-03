import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

import Reveal from "../ui/Reveal";
import styles from "./SignatureDishes.module.css";

/* ------------------------------------------------------------
   Six signature dishes from the real menu, presented as an
   editorial index rather than cards.
   ------------------------------------------------------------ */

type Dish = {
  name: string;
  description: string;
  price: string;
  category: string;
};

const dishes: Dish[] = [
  {
    name: "Litti Chicken",
    description:
      "Trademark Bihar dish of whole wheat balls stuffed with spiced sattu, served with khada masala chicken and aubergine chokha.",
    price: "₹450",
    category: "Platters",
  },
  {
    name: "Litti Mutton",
    description:
      "Whole wheat balls stuffed with spiced sattu, served with khada masala mutton and aubergine chokha.",
    price: "₹550",
    category: "Platters",
  },
  {
    name: "Ahuna Mutton",
    description:
      "Traditional preparation of mutton slow cooked in earthen pots, served with roasted flattened rice and flaky parathas.",
    price: "₹550",
    category: "Platters",
  },
  {
    name: "Mutton Chaamp",
    description:
      "Mutton chaamp in thick gravy served with tawa mirchi paratha.",
    price: "₹550",
    category: "Platters",
  },
  {
    name: "Sarson Machhli",
    description:
      "Mustard fish, rice, palak & baigan pakoras, salad.",
    price: "₹520",
    category: "Large Plates",
  },
  {
    name: "Bihari Burger",
    description:
      "Chicken patty, minced mutton keema, desi fries, garlic chutney.",
    price: "₹420",
    category: "Quick Bites",
  },
];

export default function SignatureDishes() {
  return (
    <section
      className={`section ${styles.section}`}
      aria-labelledby="signature-title"
    >
      <div className="container">
        <Reveal className={styles.head}>
          <p className="eyebrow">Signature</p>
          <h2 id="signature-title" className={`display-2 ${styles.title}`}>
            From the kitchen
          </h2>
          <p className={`lead ${styles.subtitle}`}>
            Six plates that carry the length of the menu — platters slow-cooked
            in earthen pots, a mustard fish from the plains, and a burger that
            belongs to Bihar.
          </p>
        </Reveal>

        <ul className={styles.list}>
          {dishes.map((dish, i) => (
            <Reveal key={dish.name} delay={i * 0.05}>
              <li className={styles.row}>
                <span className={styles.num}>{String(i + 1).padStart(2, "0")}</span>

                <div className={styles.body}>
                  <h3 className={`display-4 ${styles.name}`}>{dish.name}</h3>
                  <p className={styles.desc}>{dish.description}</p>
                </div>

                <div className={styles.meta}>
                  <span className={styles.category}>{dish.category}</span>
                  <span className="price">{dish.price}</span>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>

        <Reveal className={styles.ctaWrap}>
          <Link to="/menu" className={styles.cta}>
            Explore the full menu
            <ArrowUpRight size={16} strokeWidth={1.6} aria-hidden="true" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}