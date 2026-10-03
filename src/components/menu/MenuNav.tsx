import type { MenuCategory } from "../../data/menu";
import DietFilter, { type FilterValue } from "./DietFilter";
import styles from "./MenuNav.module.css";

type Props = {
  categories: Pick<MenuCategory, "id" | "name">[];
  activeId: string;
  onSelect: (id: string) => void;
  filter: FilterValue;
  onFilterChange: (value: FilterValue) => void;
};

export default function MenuNav({
  categories,
  activeId,
  onSelect,
  filter,
  onFilterChange,
}: Props) {
  return (
    <div className={styles.wrap}>
      <div className={`container ${styles.inner}`}>
        <nav className={styles.catNav} aria-label="Menu categories">
          <ul className={styles.list}>
            {categories.map((cat) => {
              const active = cat.id === activeId;
              return (
                <li key={cat.id}>
                  <button
                    type="button"
                    className={`${styles.pill} ${
                      active ? styles.pillActive : ""
                    }`}
                    aria-current={active ? "true" : undefined}
                    onClick={() => onSelect(cat.id)}
                  >
                    {cat.name}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className={styles.filterWrap}>
          <DietFilter value={filter} onChange={onFilterChange} />
        </div>
      </div>
    </div>
  );
}