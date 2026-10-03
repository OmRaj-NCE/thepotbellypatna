import styles from "./DietFilter.module.css";

export type FilterValue = "all" | "veg" | "non-veg";

type Props = {
  value: FilterValue;
  onChange: (value: FilterValue) => void;
};

const options: { value: FilterValue; label: string }[] = [
  { value: "all", label: "All" },
  { value: "veg", label: "Veg" },
  { value: "non-veg", label: "Non-veg" },
];

export default function DietFilter({ value, onChange }: Props) {
  return (
    <div
      className={styles.group}
      role="radiogroup"
      aria-label="Filter dishes by diet"
    >
      {options.map((opt) => {
        const active = value === opt.value;
        return (
          <button
            key={opt.value}
            type="button"
            role="radio"
            aria-checked={active}
            className={`${styles.btn} ${active ? styles.active : ""}`}
            onClick={() => onChange(opt.value)}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}