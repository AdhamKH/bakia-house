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
  const [selectedImage, setSelectedImage] = useState<any>(null);

  const openModal = (image: any) => {
    setSelectedImage(image); // Set the selected image to open in modal
  };

  const closeModal = () => {
    setSelectedImage(null); // Clear the selected image to close the modal
  };

  const columns = imgs?.data;

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
                  <div className={styles.column} key={e?.id}>
                    <Image
                      onClick={() => openModal(e)} // Open modal with full-size image
                      key={e?.id}
                      src={e?.image_path}
                      alt={`Image ${e?.id + 1}`}
                      width={200}
                      height={200}
                      style={{ width: "100%", height: "auto" }}
                      priority
                      layout="responsive"
                      className={styles.img}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {selectedImage && (
        <div className={`${styles.modal} =`} onClick={closeModal}>
          <span className={styles.closeButton} onClick={closeModal}>
            &times;
          </span>
          <div className={styles.fullImage}>
            <Image
              src={selectedImage?.image_path}
              alt="Full-size view"
              width={500}
              height={200}
              priority
              style={{ height: "80vh", width: "auto" }}
              // layout="responsive"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default React.memo(Furnitures);
