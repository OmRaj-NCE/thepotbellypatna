import { ArrowUpRight, MapPin } from "lucide-react";

import Reveal from "../../ui/Reveal";
import { site } from "../../../data/site";
import styles from "./ContactLocation.module.css";

const directionsUrl =
  "https://www.google.com/maps/dir/?api=1&destination=" +
  encodeURIComponent("The Potbelly, Bihar Museum, Patna");

export default function ContactLocation() {
  return (
    <section className={styles.section} aria-labelledby="location-title">
      <div className={styles.frame}>
        <div className={`container ${styles.inner}`}>
          <Reveal className={styles.copy}>
            <div className={styles.pinWrap} aria-hidden="true">
              <MapPin size={28} strokeWidth={1.4} />
            </div>

            <p className={styles.eyebrow}>Location</p>

            <h2 id="location-title" className={`display-3 ${styles.title}`}>
              On Bailey Road,
              <em className="display-italic"> inside the museum grounds</em>.
            </h2>

            <address className={styles.address}>{site.address}</address>

            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btn}
            >
              Open in Google Maps
              <ArrowUpRight size={16} strokeWidth={1.6} aria-hidden="true" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}