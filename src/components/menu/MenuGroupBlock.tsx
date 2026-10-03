import type { MenuGroup } from "../../data/menu";
import DietBadge from "./DietBadge";
import MenuItemRow from "./MenuItemRow";
import styles from "./MenuGroupBlock.module.css";

type Props = {
  group: MenuGroup;
  /** When true, the group title is visible. Set false when a category has only one unnamed group. */
  showTitle: boolean;
};

export default function MenuGroupBlock({ group, showTitle }: Props) {
  return (
    <section className={styles.group} aria-label={group.title ?? "Items"}>
      {showTitle && group.title && (
        <header className={styles.head}>
          <h3 className={styles.title}>{group.title}</h3>
          {group.diet && <DietBadge diet={group.diet} size="md" />}
        </header>
      )}

      <ul className={styles.list}>
        {group.items.map((item) => (
          <MenuItemRow key={item.name} item={item} />
        ))}
      </ul>
    </section>
  );
}