// components/Mission.js
import styles from "./style.module.scss";

const Mission = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>Mission</div>
      <div className={styles.content}>
        <p className={styles.text}>
          At BAKIA, our mission is to bring innovation and excellence to every
          facet of the interior design process. We start by deeply understanding
          and capturing our clients’ visions and needs, transforming these into
          comprehensive and inspiring design concepts. Our commitment extends
          beyond just the creative phase; we meticulously manage fit-out
          solutions, ensuring that every design element is executed with
          precision and attention to detail.
        </p>
        <div className={styles.buttonWrapper}>
          <button className={styles.button}>Our History</button>
        </div>
      </div>
    </div>
  );
};

export default Mission;
