'use client';

import { useState } from 'react';
import { getRestaurants, addRestaurant } from './restaurantService';
import styles from './page.module.css';
import Modal from '../components/Modal';

export default function Restaurants() {
  const [restaurants, setRestaurants] = useState(getRestaurants());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const validateForm = (data) => {
    const errors = {};

    if (!data.name.trim()) {
      errors.name = 'Name is required';
    }

    if (!data.location.trim()) {
      errors.location = 'Location is required';
    }

    if (!data.hours.trim()) {
      errors.hours = 'Hours are required';
    } else if (!/^\d{2}:\d{2}$/.test(data.hours)) {
      errors.hours = 'Hours must be in the format HH:MM';
    }

    return errors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newRestaurant = {
      name: formData.get('name'),
      location: formData.get('location'),
      hours: formData.get('hours'),
    };

    const errors = validateForm(newRestaurant);
    if (Object.keys(errors).length === 0) {
      const addedRestaurant = addRestaurant(newRestaurant);
      setRestaurants([...restaurants, addedRestaurant]);
      event.target.reset();
      setIsModalOpen(false);
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <div className={styles.restaurants}>
      <h2 className={styles.title}>Restaurants</h2>

      <button className={styles.createButton} onClick={() => setIsModalOpen(true)}>
        Create Restaurant
      </button>

      {isModalOpen && (
        <Modal title="Create Restaurant" onClose={() => setIsModalOpen(false)}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>Name:</label>
              <input type="text" id="name" name="name" className={styles.input} required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="location" className={styles.label}>Location:</label>
              <input type="text" id="location" name="location" className={styles.input} required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="hours" className={styles.label}>Hours:</label>
              <input type="text" id="hours" name="hours" className={styles.input} required />
              {formErrors.hours && <span className={styles.error}>{formErrors.hours}</span>}
            </div>
            <button type="submit" className={styles.button}>
              Create
            </button>
            {Object.keys(formErrors).length > 0 && (
              <div className={styles.errorMessage}>Please fix the errors and submit again.</div>
            )}
          </form>
        </Modal>
      )}

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
