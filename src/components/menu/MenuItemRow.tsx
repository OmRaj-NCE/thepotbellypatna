import type { MenuItem } from "../../data/menu";
import DietBadge from "./DietBadge";
import styles from "./MenuItemRow.module.css";

type Props = {
  item: MenuItem;
};

export default function MenuItemRow({ item }: Props) {
  return (
    <li className={styles.item}>
      <span className={styles.badgeCell}>
        <DietBadge diet={item.diet} />
      </span>

      <h4 className={styles.name}>{item.name}</h4>

      <span className={styles.price}>
        <span aria-hidden="true">₹</span>
        <span className="visually-hidden">Rupees </span>
        {item.price}
      </span>

      {item.description && (
        <p className={styles.desc}>{item.description}</p>
      )}
    </li>
  );
}