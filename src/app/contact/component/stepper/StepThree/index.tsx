import React, { useState } from "react";
import styles from "../StepOne/style.module.scss";
const StepThree = ({ value, setVlaue }: any) => {
  const handlClick = (newVAlue: string) => () => {
    setVlaue({ ...value, style: newVAlue });
    console.log("newVAlue", newVAlue);
  };

  return (
    <div className={styles.container}>
      <h2>Select your Style</h2>
      <div className={styles.buttonsContainer}>
        <button
          type="button"
          className={`${styles["button-84"]} ${
            value?.style === "Modern" && styles.selected
          }`}
          onClick={handlClick("Modern")}
        >
          Modern
        </button>

        <button
          type="button"
          className={`${styles["button-84"]} ${
            value?.style === "New Classic" && styles.selected
          }`}
          onClick={handlClick("New Classic")}
        >
          New Classic
        </button>

        <button
          type="button"
          className={`${styles["button-84"]} ${
            value?.style === "Classic" && styles.selected
          }`}
          onClick={handlClick("Classic")}
        >
          Classic
        </button>

        <button
          type="button"
          className={`${styles["button-84"]} ${
            value?.style === "Bohemian" && styles.selected
          }`}
          onClick={handlClick("Bohemian")}
        >
          Bohemian
        </button>

        <button
          type="button"
          className={`${styles["button-84"]} ${
            value?.style === "Japandi" && styles.selected
          }`}
          onClick={handlClick("Japandi")}
        >
          Japandi
        </button>

        <button
          type="button"
          className={`${styles["button-84"]} ${
            value?.style === "Mediterranean" && styles.selected
          }`}
          onClick={handlClick("Mediterranean")}
        >
          Mediterranean
        </button>

        <button
          type="button"
          className={`${styles["button-84"]} ${
            value?.style === "Scandinavian" && styles.selected
          }`}
          onClick={handlClick("Scandinavian")}
        >
          Scandinavian
        </button>

        <button
          type="button"
          className={`${styles["button-84"]} ${
            value?.style === "Coastal" && styles.selected
          }`}
          onClick={handlClick("Coastal")}
        >
          Coastal
        </button>

        <button
          type="button"
          className={`${styles["button-84"]} ${
            value?.style === "Minimalism" && styles.selected
          }`}
          onClick={handlClick("Minimalism")}
        >
          Minimalism
        </button>

        <button
          type="button"
          className={`${styles["button-84"]} ${
            value?.style === "Maximalism" && styles.selected
          }`}
          onClick={handlClick("Maximalism")}
        >
          Maximalism
        </button>

        <button
          type="button"
          className={`${styles["button-84"]} ${
            value?.style === "Industrial" && styles.selected
          }`}
          onClick={handlClick("Industrial")}
        >
          Industrial
        </button>
      </div>
    </div>
  );
};

export default StepThree;
