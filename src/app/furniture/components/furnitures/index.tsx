"use client";
import React, { useCallback, useEffect, useState } from "react";
import styles from "./style.module.scss";
import useInViewAnimation from "@/animation/useScroll";
import { motion } from "framer-motion";
import { downContainerVariant, upContainerVariant } from "@/animation";
import { Gallery } from "react-grid-gallery";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Loader from "@/components/loader";
import Image from "next/image";

interface Image {
  src: string;
  height: number;
  width: number;
  blurDataURL?: string;
  blurWidth?: number;
  blurHeight?: number;
}
const Furnitures = ({ imgs }: any) => {
  // const { controls, ref } = useInViewAnimation();
  console.log("imgs", imgs);
  const { controls: twoC, ref: twoF } = useInViewAnimation();
  const [index, setIndex] = useState(-1);
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const handleClick = (index: number, item: any) => setIndex(index);
  const columns = imgs?.data;

  // Run the function when imgs.data is available and changes

  // const columns: Image[][] = [[], [], [], []];
  // console.log("columns", columns);
  // useCallback(() => {
  //   imgs?.data?.forEach((img: any, i: any) => {
  //     columns[i % 4].push(img);
  //   });
  // }, [imgs]);

  const openModal = (image: Image) => {
    setSelectedImage(image);
    setIsAnimating(true);
  };

  // Close modal with animation
  const closeModal = () => {
    setIsAnimating(false);
  };
  return (
    <>
      <div className={styles.gridGallerySlide}>
        <div className={styles.contnet}>
          <div
            // animate={twoC}
            // ref={twoF}
            // variants={upContainerVariant}
            // initial="hidden"
            // transition={{
            //   duration: 0.8,
            //   delay: 0.4,
            // }}
            className={styles.imageContainer}
          >
            <div className={styles.row}>
              {columns?.map((e: any) => {
                return (
                  <div className={styles.column}>
                    <Image
                      key={e?.id}
                      src={e?.image_path}
                      alt={`Image ${e?.id + 1}`}
                      width={200}
                      height={200}
                      style={{ width: "100%", height: "auto" }}
                      priority
                      // onClick={() => setSelectedImage(image)}
                      onClick={() => openModal(e)}
                      layout="responsive"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {selectedImage && (
        <div
          className={`${styles.modal} ${
            isAnimating ? styles.open : styles.close
          }`}
          onClick={closeModal}
        >
          <span className={styles.closeButton} onClick={closeModal}>
            &times;
          </span>
          <Image
            src={selectedImage?.image_path}
            alt="Full-size view"
            className={styles.fullImage}
            width={200}
            height={200}
            style={{ height: "auto" }}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
};

export default React.memo(Furnitures);
