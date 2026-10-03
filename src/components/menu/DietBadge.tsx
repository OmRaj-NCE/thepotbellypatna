import type { Diet } from "../../data/menu";
import styles from "./DietBadge.module.css";

type Props = {
  diet: Diet;
  /** Renders larger, for use beside a group title. */
  size?: "sm" | "md";
};

export default function DietBadge({ diet, size = "sm" }: Props) {
  const label = diet === "veg" ? "Vegetarian" : "Non-vegetarian";

  return (
    <span
      role="img"
      aria-label={label}
      title={label}
      className={[
        styles.badge,
        diet === "veg" ? styles.veg : styles.nonVeg,
        size === "md" ? styles.md : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <span className={styles.dot} aria-hidden="true" />
    </span>
  );
}