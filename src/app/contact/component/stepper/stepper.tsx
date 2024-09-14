"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./style.module.scss";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";

// Placeholder Components for Each Step

const Stepper = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [value, setValue] = useState<any>();
  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const stepVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };
  const steps = [
    {
      id: 1,
      name: "Area  space",
      content: <StepOne value={value} setVlaue={setValue} />,
    },
    {
      id: 2,
      name: "Unit Category ",
      content: <StepTwo value={value} setVlaue={setValue} />,
    },
    {
      id: 3,
      name: "Your style",
      content: <StepThree value={value} setVlaue={setValue} />,
    },
    {
      id: 4,
      name: "Members ",
      content: <StepFour value={value} setVlaue={setValue} />,
    },
  ];
  const currentForm = () => {
    switch (currentStep) {
      case 0:
        return <StepOne value={value} setVlaue={setValue} />;
        break;
      case 1:
        return <StepTwo value={value} setVlaue={setValue} />;
        break;
      case 2:
        return <StepThree value={value} setVlaue={setValue} />;
        break;
      case 3:
        return <StepFour value={value} setVlaue={setValue} />;
        break;
    }
  };
  const isLastStep = currentStep === steps.length - 1;
  console.log("isLastStep", isLastStep);
  const handlSubmit = (e: any) => {
    e.preventDefault();
    console.log("Value", value);
  };
  return (
    <div className={styles.stepperContainer}>
      {/* Stepper Header */}
      <div className={styles.stepIndicator}>
        {steps.map((step, index) => (
          <div
            key={step.id}
            className={`${styles.step} ${
              currentStep > index
                ? styles.done
                : currentStep === index
                ? styles.active
                : ""
            }`}
          >
            <span>{step.name}</span>
          </div>
        ))}
      </div>

      {/* Step Form */}
      <form onSubmit={handlSubmit}>
        <motion.div
          key={currentStep}
          variants={stepVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.5 }}
          className={styles.formContainer}
        >
          {currentForm()}
        </motion.div>
        <div className={styles.buttonsContainer}>
          <button
            onClick={handleBack}
            disabled={currentStep === 0}
            type="button"
            className={styles["button-27"]}
          >
            Back
          </button>
          {isLastStep ? (
            <>
              <button type="submit" className={styles["button-27"]}>
                Submit
              </button>
            </>
          ) : (
            <>
              <button
                type="button"
                className={styles["button-27"]}
                onClick={handleNext}
              >
                Next
              </button>
            </>
          )}
        </div>
      </form>
    </div>
  );
};

export default Stepper;
