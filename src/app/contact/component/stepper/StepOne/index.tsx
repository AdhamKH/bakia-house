import React, { useState } from "react";
import styles from "./style.module.scss";
const StepOne = ({ value, setVlaue }: any) => {
  const handlClick = (newVAlue: number) => () => {
    setVlaue({ ...value, area: newVAlue });
    console.log("newVAlue", newVAlue);
  };

  return (
    <div className={styles.container}>
      <h2>Select your Area space</h2>
      <div className={styles.buttonsContainer}>
        <button
          type="button"
          className={`${styles["button-84"]} ${
            value?.area === 150 && styles.selected
          }`}
          onClick={handlClick(150)}
        >
          150m
        </button>
        <button
          type="button"
          className={`${styles["button-84"]} ${
            value?.area === 200 && styles.selected
          }`}
          onClick={handlClick(200)}
        >
          200m
        </button>
        <button
          type="button"
          className={`${styles["button-84"]} ${
            value?.area === 300 && styles.selected
          }`}
          onClick={handlClick(300)}
        >
          300m
        </button>
      </div>
    </div>
  );
};

export default StepOne;
