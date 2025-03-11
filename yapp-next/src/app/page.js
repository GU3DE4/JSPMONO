import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Restaurants from "./restaurants/page";

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.logo}>YAPP</h1>
      </header>
      <div className={styles.content}>
        <nav className={styles.sideMenu}>
          <ul>
            <li>Menu Item 1</li>
            <li>Menu Item 2</li>
            <li>Menu Item 3</li>
            <li>
              <Link href="/restaurants">Restaurants</Link>
            </li>
          </ul>
        </nav>
        <main className={styles.main}>
          <Restaurants />
        </main>
      </div>
    </div>
  );
}
