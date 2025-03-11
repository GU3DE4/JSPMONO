'use client';

import Link from "next/link";
import styles from "./topbar.module.css";

export default function Topbar({ onMenuToggle, isMenuOpen }) {
  const handleMenuToggle = () => {
    onMenuToggle(false);
  };

  return (
    <header className={styles.topbar}>
      <div className={styles.hamburger} onClick={handleMenuToggle}>
        <div className={`${styles.line} ${isMenuOpen ? styles.open : ""}`}></div>
        <div className={`${styles.line} ${isMenuOpen ? styles.open : ""}`}></div>
        <div className={`${styles.line} ${isMenuOpen ? styles.open : ""}`}></div>
      </div>
      <Link href="/">
        <h1 className={styles.logo}>YAPP</h1>
      </Link>
    </header>
  );
} 