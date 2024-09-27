"use client";
import React, { useEffect, useState } from "react";
import styles from "./style.module.scss";
import useInViewAnimation from "@/animation/useScroll";
import { motion } from "framer-motion";
import { downContainerVariant, upContainerVariant } from "@/animation";
import { Gallery } from "react-grid-gallery";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Loader from "@/components/loader";

const Furnitures = ({ imgs }: any) => {
  // const { controls, ref } = useInViewAnimation();
  const { controls: twoC, ref: twoF } = useInViewAnimation();
  const [index, setIndex] = useState(-1);

  const handleClick = (index: number, item: any) => setIndex(index);

  return (
    <div className={styles.gridGallerySlide}>
      <div className={styles.contnet}>
        <motion.div
          animate={twoC}
          ref={twoF}
          variants={upContainerVariant}
          initial="hidden"
          transition={{
            duration: 0.8,
            delay: 0.4,
          }}
          className={styles.imageContainer}
        >
          <div className={styles.imagesContainer}>
            <Gallery
              images={imgs}
              onClick={handleClick}
              enableImageSelection={false}
            ></Gallery>
            <Lightbox
              slides={imgs}
              open={index >= 0}
              index={index}
              close={() => setIndex(-1)}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Furnitures;
