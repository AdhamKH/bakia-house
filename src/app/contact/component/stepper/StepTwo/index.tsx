import React, { useState } from "react";
import styles from "../StepOne/style.module.scss";
const StepTwo = ({ value, setVlaue }: any) => {
  const handlClick = (newVAlue: string) => () => {
    setVlaue({ ...value, unit: newVAlue });
    console.log("newVAlue", newVAlue);
  };

  return (
    <div className={styles.container}>
      <h2>Select your Area space</h2>
      <div className={styles.buttonsContainer}>
        <button
          type="button"
          className={`${styles["button-84"]} ${
            value?.unit === "Studio" && styles.selected
          }`}
          onClick={handlClick("Studio")}
        >
          Studio
        </button>

        <button
          type="button"
          className={`${styles["button-84"]} ${
            value?.unit === "Flat" && styles.selected
          }`}
          onClick={handlClick("Flat")}
        >
          Flat
        </button>

        <button
          type="button"
          className={`${styles["button-84"]} ${
            value?.unit === "Villa" && styles.selected
          }`}
          onClick={handlClick("Villa")}
        >
          Villa
        </button>

        <button
          type="button"
          className={`${styles["button-84"]} ${
            value?.unit === "Café" && styles.selected
          }`}
          onClick={handlClick("Café")}
        >
          Café
        </button>

        <button
          type="button"
          className={`${styles["button-84"]} ${
            value?.unit === "Administration" && styles.selected
          }`}
          onClick={handlClick("Administration")}
        >
          Administration
        </button>

        <button
          type="button"
          className={`${styles["button-84"]} ${
            value?.unit === "Clinics" && styles.selected
          }`}
          onClick={handlClick("Clinics")}
        >
          Clinics
        </button>

        <button
          type="button"
          className={`${styles["button-84"]} ${
            value?.unit === "Mall" && styles.selected
          }`}
          onClick={handlClick("Mall")}
        >
          Mall
        </button>

        <button
          type="button"
          className={`${styles["button-84"]} ${
            value?.unit === "Store" && styles.selected
          }`}
          onClick={handlClick("Store")}
        >
          Store
        </button>
      </div>
    </div>
  );
};

export default StepTwo;
