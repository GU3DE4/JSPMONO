import Image from "next/image";
import styles from "./homepage.module.css";
import Link from "next/link";

export default function Homepage({ children }) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.logo}>YAPP</h1>
      </header>
    </div>
  );
} 