"use client";
import React, { useState } from "react";
import styles from "./style.module.scss";
import useInViewAnimation from "@/animation/useScroll";
import { motion } from "framer-motion";
import { downContainerVariant, upContainerVariant } from "@/animation";
import { Gallery } from "react-grid-gallery";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Image from "next/image";
import Masonry from "react-masonry-css";

const Projects = ({ data }: any) => {
  const { controls, ref } = useInViewAnimation();
  const { controls: twoC, ref: twoF } = useInViewAnimation();
  const { imgs, title } = data;
  const [index, setIndex] = useState(-1);

  const handleClick = (index: number, item: any) => setIndex(index);
  console.log("imgs", imgs);
  const breakpointColumnsObj = {
    default: 4, // 4 columns by default
    1100: 3, // 3 columns for screens <= 1100px
    700: 2, // 2 columns for screens <= 700px
    500: 1, // 1 column for screens <= 500px
  };

  return (
    <div className={styles.gridGallerySlide}>
      <div>
        {/* <motion.div
          animate={controls}
          ref={ref}
          variants={downContainerVariant}
          initial="hidden"
          transition={{
            duration: 0.8,
            delay: 0.4,
          }}
          className={styles.textContainer}
        >
          <h3>{title}</h3>
        </motion.div>
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
        </motion.div> */}
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
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className={styles.myMasonryGrid} // Custom CSS for styling
            columnClassName={styles.myMasonryGrid_column} // Custom column styling
          >
            {imgs?.map((e: any, index: number) => (
              <motion.div key={index} onClick={() => handleClick(index, e)}>
                <Image
                  src={e.src}
                  alt={e.alt || `Image ${index + 1}`}
                  width={300}
                  height={400}
                  className={styles.masonryImage}
                  objectFit="cover"
                />
              </motion.div>
            ))}
          </Masonry>

          {/* Lightbox for full-screen view */}
          <Lightbox
            slides={imgs}
            open={index >= 0}
            index={index}
            close={() => setIndex(-1)}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
