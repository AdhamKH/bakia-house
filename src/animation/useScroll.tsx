"use client";
import { useEffect, useRef, useState } from "react";
import { useAnimation } from "framer-motion";

const useInViewAnimation = (threshold = 0.1) => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isInView, setIsInView] = useState(false);

  const controls = useAnimation();
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setIsInView(true);
            controls.start("visible"); // Start your Framer Motion animation here
            setHasAnimated(true);
          }
        });
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, threshold, controls]);

  return { ref, controls };
};

export default useInViewAnimation;
