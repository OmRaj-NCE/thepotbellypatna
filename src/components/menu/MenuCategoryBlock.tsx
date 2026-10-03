import { ChevronDown } from "lucide-react";

import type { MenuCategory } from "../../data/menu";
import MenuGroupBlock from "./MenuGroupBlock";
import styles from "./MenuCategoryBlock.module.css";

type Props = {
  category: MenuCategory;
  index: number;
  /** Whether the category body is rendered. On desktop this is always true. */
  open: boolean;
  /** When true, the header becomes a toggle button (mobile accordion). */
  interactive: boolean;
  onToggle: () => void;
};

export default function MenuCategoryBlock({
  category,
  index,
  open,
  interactive,
  onToggle,
}: Props) {
  const showGroupTitles = !(
    category.groups.length === 1 && !category.groups[0].title
  );

  const bodyId = `${category.id}-body`;
  const headingId = `${category.id}-heading`;

  return (
    <section
      id={category.id}
      className={styles.category}
      aria-labelledby={headingId}
    >
      <header className={styles.head}>
        <div className={styles.headMain}>
          <p className={styles.index}>
            {String(index + 1).padStart(2, "0")}
          </p>

          <h2 id={headingId} className={styles.title}>
            {category.name}
          </h2>

          <p className={styles.intro}>{category.intro}</p>
        </div>

        {interactive && (
          <button
            type="button"
            className={styles.toggle}
            aria-expanded={open}
            aria-controls={bodyId}
            onClick={onToggle}
          >
            <span className="visually-hidden">
              {open ? "Collapse" : "Expand"} {category.name}
            </span>
            <ChevronDown
              size={20}
              strokeWidth={1.5}
              aria-hidden="true"
              className={`${styles.chevron} ${open ? styles.chevronOpen : ""}`}
            />
          </button>
        )}
      </header>

      {open && (
        <div id={bodyId} className={styles.body}>
          {category.groups.map((group, i) => (
            <MenuGroupBlock
              key={group.title ?? `group-${i}`}
              group={group}
              showTitle={showGroupTitles}
            />
          ))}
        </div>
      )}
    </section>
  );
}