'use client';

import { useState } from 'react';
import styles from './Modal.module.css';

export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div 
      className={styles.modalOverlay}
    >
      <div className={styles.modalContent}>
        <button 
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Close modal"
        >
          ×
        </button>
        {children}
      </div>
    </div>
  );
} 