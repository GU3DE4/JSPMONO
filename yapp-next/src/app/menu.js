import Link from "next/link";
import styles from "./menu.module.css";
import { forwardRef } from "react";

const Menu = forwardRef(({ isOpen, onClose }, ref) => {
  return (
    <nav className={`${styles.sideMenu} ${isOpen ? styles.open : ""}`} ref={ref}>
      <div className={styles.closeButton} onClick={onClose}>
        <span className={styles.closeIcon}>&times;</span>
      </div>
      <ul>
        <li>
          <Link href="/">Homepage</Link>
        </li>
        <li>
          <Link href="/promotions">Promotions</Link>
        </li>
        <li>
          <Link href="/establishments">Establishments</Link>
        </li>
      </ul>
    </nav>
  );
});

export default Menu; 