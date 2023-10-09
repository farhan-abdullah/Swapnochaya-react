import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../../assets/banner (1).jpg";
import img2 from "../../../assets/banner (2).jpg";
import img3 from "../../../assets/banner (3).jpg";
// import img4 from "../../../assets/banner (4).jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Carousel.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Carosel = () => {
   return (
      <div className="w-full md:h-[80vh] bg-cover">
         <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
               delay: 2500,
               disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper">
            <div className="">
               <SwiperSlide>
                  <img
                     className="w-[100%] h-[50%]  md:h-[100%] bg-cover"
                     src={img1}
                     alt=""
                  />
               </SwiperSlide>
               <SwiperSlide>
                  <img
                     className="w-[100%] h-[50%] md:h-[100%] bg-cover"
                     src={img2}
                     alt=""
                  />
               </SwiperSlide>
               <SwiperSlide>
                  <img
                     className="w-[100%] h-[50%] md:h-[100%] bg-cover"
                     src={img3}
                     alt=""
                  />
               </SwiperSlide>
            </div>
            {/* <SwiperSlide>
               <img src={img4} alt="" />
            </SwiperSlide> */}
         </Swiper>
      </div>
   );
};

export default Carosel;
