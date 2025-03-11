'use client';

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import styles from "./page.module.css";
import Link from "next/link";
import Menu from "./menu";
import Topbar from "./topbar";
import { useState, useEffect, useRef } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const handleMenuToggle = (isOpen) => {
    setIsMenuOpen(isOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className={styles.container}>
          <Topbar onMenuToggle={handleMenuToggle} isMenuOpen={isMenuOpen} />
          <Menu isOpen={isMenuOpen} ref={menuRef} onClose={() => setIsMenuOpen(false)} />
          <main className={styles.main}>{children}</main>
        </div>
      </body>
    </html>
  );
}
