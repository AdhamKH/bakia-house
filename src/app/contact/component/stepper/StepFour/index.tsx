import React, { useState } from "react";
import styles from "../StepOne/style.module.scss";
const StepFour = ({ value, setVlaue }: any) => {
  const handlClick = (newVAlue: string) => () => {
    setVlaue({ ...value, member: newVAlue });
    console.log("newVAlue", newVAlue);
  };

  return (
    <div className={styles.container}>
      <h2>Select your Member</h2>
      <div className={styles.buttonsContainer}>
        <button
          type="button"
          className={`${styles["button-84"]} ${
            value?.member === "Couples" && styles.selected
          }`}
          onClick={handlClick("Couples")}
        >
          Couples
        </button>

        <button
          type="button"
          className={`${styles["button-84"]} ${
            value?.member === "Family" && styles.selected
          }`}
          onClick={handlClick("Family")}
        >
          Family
        </button>

        <button
          type="button"
          className={`${styles["button-84"]} ${
            value?.member === "Firms" && styles.selected
          }`}
          onClick={handlClick("Firms")}
        >
          Firms
        </button>

        <button
          type="button"
          className={`${styles["button-84"]} ${
            value?.member === "Other" && styles.selected
          }`}
          onClick={handlClick("Other")}
        >
          Other
        </button>
      </div>
    </div>
  );
};

export default StepFour;
