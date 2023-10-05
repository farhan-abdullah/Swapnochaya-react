import React from "react";
// import AutoplaySlider from "react-awesome-slider/hoc/autoplay";
// import AwesomeSliderStyles from "react-awesome-slider/src/styled/fold-out-animation.scss";

import img1 from "../../../assets/banner (1).jpg";
import img2 from "../../../assets/banner (2).jpg";
import img3 from "../../../assets/banner (3).jpg";

const Carosel = () => {
   return (
      <div className="w-full h-fit md:h-[80vh] ">
         <img src={img1} className="h-[80vh] w-full bg-cover" alt="" />
      </div>
   );
};

export default Carosel;
