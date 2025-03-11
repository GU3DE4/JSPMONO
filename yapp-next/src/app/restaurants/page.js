import styles from './page.module.css';

export default function Restaurants() {
  const restaurants = [
    { id: 1, name: "Restaurant 1", location: "Location 1", hours: "Hours 1" },
    { id: 2, name: "Restaurant 2", location: "Location 2", hours: "Hours 2" },
    { id: 3, name: "Restaurant 3", location: "Location 3", hours: "Hours 3" },
  ];

  return (
    <div className={styles.restaurants}>
      <h2 className={styles.title}>Restaurants</h2>

      <div className={styles.grid}>
        {restaurants.map((restaurant) => (
          <div key={restaurant.id} className={styles.card}>
            <h3 className={styles.cardTitle}>{restaurant.name}</h3>
            <div className={styles.cardDetails}>
              <p><span>Location:</span> {restaurant.location}</p>
              <p><span>Hours:</span> {restaurant.hours}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 
