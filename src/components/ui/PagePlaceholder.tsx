import styles from "./PagePlaceholder.module.css";

type Props = {
  index: string;
  title: string;
  hindi?: string;
  intro: string;
  note?: string;
};

/* ------------------------------------------------------------
   Temporary page shell.
   Every page in Phase 3 uses this until the real content
   is built in later phases.
   ------------------------------------------------------------ */

export default function PagePlaceholder({
  index,
  title,
  hindi,
  intro,
  note = "This page will be built in a later phase.",
}: Props) {
  return (
    <section className={`container ${styles.wrap}`}>
      <p className={`eyebrow ${styles.eyebrow}`}>{index}</p>

      <h1 className={`display-1 ${styles.title}`}>{title}</h1>

      {hindi && <p className={styles.hindi}>{hindi}</p>}

      <p className={`lead ${styles.intro}`}>{intro}</p>

      <p className={styles.note}>{note}</p>
    </section>
  );
}