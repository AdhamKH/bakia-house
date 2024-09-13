"use client";
import React, { useState, useEffect, useRef } from "react";
import styles from "./style.module.scss";

const Countdown = ({
  start,
  end,
  title,
  icon,
  totalDuration = 2000,
}: {
  start: number;
  end: number;
  title: string;
  icon: string;
  totalDuration?: number;
}) => {
  const [currentNumber, setCurrentNumber] = useState(start);
  const [inView, setInView] = useState(false);
  const countdownRef = useRef(null);
  const totalSteps = end - start;
  const stepDuration =
    totalSteps > 0 ? totalDuration / totalSteps : totalDuration;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      {
        threshold: 0.9, // Trigger when 10% of the component is in view
      }
    );

    if (countdownRef.current) {
      observer.observe(countdownRef.current);
    }

    return () => {
      if (countdownRef.current) {
        observer.unobserve(countdownRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (inView && currentNumber < end) {
      const timer = setTimeout(() => {
        setCurrentNumber((prev) => prev + 1);
      }, stepDuration); // Adjust speed based on the number of steps needed
      return () => clearTimeout(timer);
    }
  }, [inView, currentNumber, end, stepDuration]);

  return (
    <div className={styles.countdown} ref={countdownRef}>
      <div className={styles.number} key={currentNumber}>
        <h1>
          {currentNumber} <span>{icon}</span>
        </h1>
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default Countdown;
