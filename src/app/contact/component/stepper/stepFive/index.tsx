import React, { useState } from "react";
import styles from "../StepOne/style.module.scss";
const StepFive = ({ value, setVlaue }: any) => {
  const handlClick = (newVAlue: string) => () => {
    setVlaue({ ...value, member: newVAlue });
    console.log("newVAlue", newVAlue);
  };

  return (
    <div className={styles.container}>
      {/* <h2>Personal Info</h2> */}
      <div className={styles.rightDiv}>
        {/* <h1>{t("inquiry")}</h1> */}
        {/* <p>{t("leave")}</p> */}
        <div>
          <label htmlFor="">Name </label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">Email </label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">Your question</label>
          <textarea />
        </div>
      </div>
    </div>
  );
};

export default StepFive;
