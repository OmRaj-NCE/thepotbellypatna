import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

import Reveal from "../ui/Reveal";
import styles from "./MenuPreview.module.css";

/* ------------------------------------------------------------
   A small editorial preview of three menu categories. Prices
   and dish names are drawn from the real menu; a full editorial
   menu page is built in Phase 5.
   ------------------------------------------------------------ */

type Preview = {
  category: string;
  note: string;
  items: { name: string; price: string }[];
};

const previews: Preview[] = [
  {
    category: "Starters",
    note: "Small bites and Bihari fritters.",
    items: [
      { name: "Saboodana Basket", price: "₹240" },
      { name: "Baggia (Urad / Chana)", price: "₹285" },
      { name: "Macchi Goli", price: "₹380" },
      { name: "Keema Goli", price: "₹385" },
    ],
  },
  {
    category: "Platters",
    note: "Slow-cooked, served to share.",
    items: [
      { name: "Litti Chicken", price: "₹450" },
      { name: "Ahuna Mutton", price: "₹550" },
      { name: "Mutton Chaamp", price: "₹550" },
      { name: "Tarkari Thali", price: "₹340" },
    ],
  },
  {
    category: "Beverages",
    note: "Desi coolers and iced teas.",
    items: [
      { name: "Sattu Cooler", price: "₹180" },
      { name: "Lassi", price: "₹225" },
      { name: "Aam Panna", price: "₹225" },
      { name: "Rose Iced Tea", price: "₹285" },
    ],
  },
];

export default function MenuPreview() {
  return (
    <section
      className={`section ${styles.section}`}
      aria-labelledby="menu-preview-title"
    >
      <div className="container">
        <Reveal className={styles.head}>
          <p className="eyebrow">From the Menu</p>
          <h2
            id="menu-preview-title"
            className={`display-2 ${styles.title}`}
          >
            A short walk through
            <em className="display-italic"> the kitchen</em>.
          </h2>
        </Reveal>

        <div className={styles.grid}>
          {previews.map((preview, i) => (
            <Reveal key={preview.category} delay={i * 0.08}>
              <article className={styles.col}>
                <header className={styles.colHead}>
                  <h3 className={styles.colTitle}>{preview.category}</h3>
                  <p className={styles.colNote}>{preview.note}</p>
                </header>

                <ul className={styles.items}>
                  {preview.items.map((item) => (
                    <li key={item.name} className={styles.item}>
                      <span className={styles.itemName}>{item.name}</span>
                      <span className={styles.itemDots} aria-hidden="true" />
                      <span className="price">{item.price}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className={styles.ctaWrap}>
          <Link to="/menu" className={styles.cta}>
            Explore the Menu
            <ArrowUpRight size={16} strokeWidth={1.6} aria-hidden="true" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}