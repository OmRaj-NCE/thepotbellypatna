import Reveal from "../../ui/Reveal";
import { site } from "../../../data/site";
import styles from "./TheSetting.module.css";

/* ------------------------------------------------------------
   Three-column horizontal band describing the setting.
   ------------------------------------------------------------ */

export default function TheSetting() {
  return (
    <section
      className={`section ${styles.section}`}
      aria-labelledby="setting-experience-title"
    >
      <div className={`container ${styles.grid}`}>
        <Reveal className={styles.head}>
          <p className="eyebrow">The Setting</p>
          <h2
            id="setting-experience-title"
            className={`display-3 ${styles.title}`}
          >
            A dining room inside the state's own archive.
          </h2>
        </Reveal>

        <Reveal className={styles.prose} delay={0.08}>
          <p className={styles.para}>
            The Potbelly sits on Bailey Road, within the grounds of the Bihar
            Museum. The room is not an exhibition — it is a restaurant — but
            the location shapes the meal. You are dining inside a building
            that holds the state's history, and the menu is a continuation
            of that same conversation.
          </p>

          <p className={styles.para}>
            The dining floor is arranged for long tables as much as for two.
            Seating is unhurried, the lighting is warm, and the service moves
            at the pace of the food — slowly, because the cooking is slow.
          </p>
        </Reveal>

        <Reveal className={styles.card} delay={0.16}>
          <dl className={styles.details}>
            <div className={styles.detailRow}>
              <dt>Venue</dt>
              <dd>Bihar Museum · Patna</dd>
            </div>
            <div className={styles.detailRow}>
              <dt>Address</dt>
              <dd>{site.address}</dd>
            </div>
            <div className={styles.detailRow}>
              <dt>Cuisine</dt>
              <dd>{site.cuisine}</dd>
            </div>
            <div className={styles.detailRow}>
              <dt>Phone</dt>
              <dd>
                <a href={site.phoneHref} className={styles.phoneLink}>
                  {site.phone}
                </a>
              </dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </section>
  );
}