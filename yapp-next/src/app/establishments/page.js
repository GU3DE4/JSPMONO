import { getEstablishments } from './establishmentService';
import styles from './page.module.css';
import EstablishmentList from './EstablishmentList';

export default async function EstablishmentsPage() {
  const establishments = await getEstablishments();

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Establishments</h2>
      </div>
      <EstablishmentList establishments={establishments} />
    </div>
  );
} 