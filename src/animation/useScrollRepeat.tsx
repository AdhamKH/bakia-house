"use client";
import { useEffect, useRef, useState } from "react";
import { useAnimation } from "framer-motion";

const useInViewAnimationRepeat = (threshold = 0.5) => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isInView, setIsInView] = useState(false);

  const controls = useAnimation();
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            controls.start("visible"); // Start your Framer Motion animation here
          } else {
            setIsInView(false);
            controls.start("hidden"); // Optionally, hide the animation when out of view
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

export default useInViewAnimationRepeat;
