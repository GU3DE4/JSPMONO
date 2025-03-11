import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home({ children }) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
          <h1 className={styles.logo}>YAPP</h1>
      </header>
    </div>
  );
}
