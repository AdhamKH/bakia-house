import React from "react";
import styles from "./style.module.scss";

const Services = () => {
  return (
    <section className={styles.servicesSection}>
      <h2 className={styles.sectionTitle}>Our Services</h2>
      <div className={styles.servicesContainer}>
        <div className={styles.serviceBox}>
          <h3 className={styles.serviceTitle}>Services</h3>
          <hr className={styles.divider} />
          <ul className={styles.serviceList}>
            <li>Designs</li>
            <li>Execution</li>
            <li>Furniture</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;
