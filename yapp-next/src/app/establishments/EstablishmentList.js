'use client';

import { useState } from 'react';
import styles from './page.module.css';
import Modal from '../components/Modal';
import { establishmentSchema } from './validationSchema';

export default function EstablishmentList({ establishments }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: ''
  });
  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    // ... validation code ...
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    validateField(name, value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Validate all fields
      const { error } = await establishmentSchema.validate(formData, { 
        abortEarly: false 
      });

      if (error) {
        // Create an object with all validation errors
        const validationErrors = {};
        error.details.forEach(detail => {
          validationErrors[detail.path[0]] = detail.message;
        });
        setErrors(validationErrors);
        return;
      }

      // If validation passes, create establishment using the API route
      const response = await fetch('/api/establishments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const { establishment } = await response.json();
        establishments.push(establishment); // Add the new establishment to the list
        setIsModalOpen(false);
        setFormData({ name: '', address: '', phone: '' }); // Reset form
        setErrors({}); // Reset errors
      } else {
        console.error('Failed to create establishment');
      }
    } catch (error) {
      // Handle any errors that occur during establishment creation
      console.error('Failed to create establishment:', error);
    }
  };

  return (
    <>
      <button 
        className={styles.createButton} 
        onClick={() => setIsModalOpen(true)}
      >
        Create Establishment
      </button>

      <Modal 
        isOpen={isModalOpen} 
        onClose={() => {
          setIsModalOpen(false);
          setFormData({ name: '', address: '', phone: '' }); // Reset form
          setErrors({}); // Reset errors
        }}
      >
        <form className={styles.form} onSubmit={handleSubmit}>
          <h2>Create New Establishment</h2>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            {errors.name && <span className={styles.errorMessage}>{errors.name}</span>}
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              required
            />
            {errors.address && <span className={styles.errorMessage}>{errors.address}</span>}
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="phone">Phone:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
            {errors.phone && <span className={styles.errorMessage}>{errors.phone}</span>}
          </div>
          <div className={styles.formActions}>
            <button 
              type="button" 
              onClick={() => {
                setIsModalOpen(false);
                setFormData({ name: '', address: '', phone: '' }); // Reset form
                setErrors({}); // Reset errors
              }}
            >
              Cancel
            </button>
            <button type="submit">
              Create
            </button>
          </div>
        </form>
      </Modal>

      <div className={styles.cardGrid}>
        {establishments.map((establishment) => (
          <div key={establishment.id} className={styles.card}>
            <h3 className={styles.cardTitle}>{establishment.name}</h3>
            <div className={styles.cardDetails}>
              <p><span>Location:</span> {establishment.location}</p>
              <p><span>Hours:</span> {establishment.hours}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
} 