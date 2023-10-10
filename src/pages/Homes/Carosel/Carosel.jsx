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
                  <div className="relative">
                     <img
                        className="w-[100%] h-[50%]  md:h-[100%] bg-cover"
                        src={img1}
                        alt=""
                     />
                     <div className="absolute top-0 left-0 bottom-0 bg-black/40 flex justify-center items-center flex-col text-center right-0 z-20">
                        <h2 className="text-[50px] text-white font-bold mb-2 leading-none">
                           Make a difference for people
                           <br />
                           who needs it the most
                        </h2>
                        <button className="bg-blue-500 uppercase mt-4 px-6 py-2 border-none text-[#fff]">
                           Start with a little
                        </button>
                     </div>
                  </div>
               </SwiperSlide>
               <SwiperSlide>
                  <div className="relative">
                     <img
                        className="w-[100%] h-[50%] md:h-[100%] bg-cover"
                        src={img2}
                        alt=""
                     />
                     <div className="absolute top-0 left-0 bottom-0 bg-black/40 flex justify-center items-center flex-col text-center right-0 z-20">
                        <h2 className="text-[50px] text-white font-bold mb-2 leading-none">
                           Make a difference for people
                           <br />
                           who needs it the most
                        </h2>
                        <button className="bg-blue-500 uppercase mt-4 px-6 py-2 border-none text-[#fff]">
                           Start with a little
                        </button>
                     </div>
                  </div>
               </SwiperSlide>
               <SwiperSlide>
                  <div className="relative">
                     <img
                        className="w-[100%] h-[50%] md:h-[100%] bg-cover"
                        src={img3}
                        alt=""
                     />
                     <div className="absolute top-0 left-0 bottom-0 bg-black/40 flex justify-center items-center flex-col text-center right-0 z-20">
                        <h2 className="text-[50px] text-white font-bold mb-2 leading-none">
                           Make a difference for people
                           <br />
                           who needs it the most
                        </h2>
                        <button className="bg-blue-500 uppercase mt-4 px-6 py-2 border-none text-[#fff]">
                           Start with a little
                        </button>
                     </div>
                  </div>
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
