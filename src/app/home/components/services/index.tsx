import React from "react";
import styles from "./style.module.scss";

const Services = () => {
  return (
    <section className={styles.servicesSection}>
      <h2 className={styles.sectionTitle}>Our Services</h2>
      <div className={styles.content}>
        <div className={styles.servicesContainer}>
          <div className={styles.serviceBox}>
            <h3 className={styles.serviceTitle}>Designs</h3>
          </div>
          <div className={styles.serviceBox}>
            <h3 className={styles.serviceTitle}>Execution</h3>
          </div>
          <div className={styles.serviceBox}>
            <h3 className={styles.serviceTitle}>Furniture</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
