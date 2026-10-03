import { Link } from "react-router-dom";
import { ArrowUpRight, MapPin, Phone } from "lucide-react";

import Reveal from "../../ui/Reveal";
import { site } from "../../../data/site";
import styles from "./ContactDetails.module.css";

const directionsUrl =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent("The Potbelly Bihar Museum Patna");

export default function ContactDetails() {
  return (
    <section
      className={`section ${styles.section}`}
      aria-labelledby="contact-details-title"
    >
      <div className="container">
        <h2 id="contact-details-title" className="visually-hidden">
          Contact details
        </h2>

        <div className={styles.grid}>
          <Reveal className={styles.card}>
            <div className={styles.iconRow}>
              <MapPin size={18} strokeWidth={1.5} aria-hidden="true" />
              <p className={styles.cardLabel}>Visit</p>
            </div>

            <p className={styles.cardBody}>{site.address}</p>

            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.cardLink}
            >
              Get directions
              <ArrowUpRight size={14} strokeWidth={1.6} aria-hidden="true" />
            </a>
          </Reveal>

          <Reveal className={styles.card} delay={0.08}>
            <div className={styles.iconRow}>
              <Phone size={18} strokeWidth={1.5} aria-hidden="true" />
              <p className={styles.cardLabel}>Call</p>
            </div>

            <a href={site.phoneHref} className={styles.phone}>
              {site.phone}
            </a>

            <p className={styles.cardBody}>
              To reserve a table, call the restaurant directly or place a
              request through the site.
            </p>

            <Link to="/reservation" className={styles.cardLink}>
              Reserve a Table
              <ArrowUpRight size={14} strokeWidth={1.6} aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}