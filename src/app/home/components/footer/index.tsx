// components/Navbar.js
import styles from "./style.module.scss";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <Link href="/">
          <p className={styles.navLink}>Home</p>
        </Link>
        <Link href="/pbout">
          <p className={styles.navLink}>About</p>
        </Link>
        <Link href="/vision">
          <p className={styles.navLink}>Vision</p>
        </Link>
        <Link href="/project">
          <p className={styles.navLink}>Project</p>
        </Link>
        <Link href="/contact">
          <p className={styles.navLink}>Contact</p>
        </Link>
      </nav>
      <footer className={styles.footer}>
        <p>Copyright © 2024 Bakia House | Powered by Bakia House</p>
      </footer>
    </>
  );
};

export default Footer;
