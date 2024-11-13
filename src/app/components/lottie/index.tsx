import Lottie from "lottie-react";
import React from "react";

const LottieContainer = ({ animation, loop, height, width }: any) => {
  return (
    <Lottie
      animationData={animation}
      loop={loop}
      //   style={{ height: `${height}%`, width: `${width}%` }} // Dynamic height and width
    />
  );
};

export default LottieContainer;
