import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const success = [
   {
      sImage: "https://demo1.imithemes.com/html/born-to-give/images/event2.jpg",
      sTitle: "Everyday food for Mumbai children",
      sPara: "Vestibulum quam nisi, pretium a nibh sit amet, consectetur hendrerit mi. Aenean imperdiet lacus sit amet elit porta, et malesuada erat bibendum. Cras sed nunc massa. Quisque tempor dolor sit amet tellus malesuada, malesuada iaculis eros dignissim.",
   },
   {
      sImage: "https://demo1.imithemes.com/html/born-to-give/images/event2.jpg",
      sTitle: "Everyday food for Mumbai children",
      sPara: "Vestibulum quam nisi, pretium a nibh sit amet, consectetur hendrerit mi. Aenean imperdiet lacus sit amet elit porta, et malesuada erat bibendum. Cras sed nunc massa. Quisque tempor dolor sit amet tellus malesuada, malesuada iaculis eros dignissim.",
   },
];

const Success = () => {
   return (
      <div className="bg-[#fff]">
         <div className="py-[56px] flex justify-center items-center flex-col">
            <h2 className="text-[36px] font-semibold  text-center">
               Some of the success stories
            </h2>
            <div className="w-[80px] h-[2px] bg-primary rounded-md"></div>
         </div>
         <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, A11y]}
            navigation
            // pagination={{ clickable: true }}
            // scrollbar={{ draggable: true, scrollbar: false }}
            // onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}>
            {
               <div className="w-[100%]">
                  {success.map(
                     (
                        scs,
                        index // Fix here: Define 'scs' within the map function
                     ) => (
                        <SwiperSlide key={index}>
                           <div className="grid grid-cols-1 md:grid-cols-2">
                              <div className="w-full md:h-[340px] bg-cover">
                                 <img
                                    className="w-[100%]"
                                    src={scs.sImage}
                                    alt=""
                                 />
                              </div>
                              <div className="px-[30px] py-[60px] w-full bg-[#f7f7f6] ">
                                 <h2 className="text-[24px] mb-[15px]">
                                    {scs.sTitle}
                                 </h2>{" "}
                                 <p className="text-[15px] text-[#898989] mb-[15px] max-w-[520px] ">
                                    {scs.sPara}
                                 </p>{" "}
                                 <button className="bg-primary py-2 px-[30px] text-[#fff] uppercase ">
                                    View full story
                                 </button>
                              </div>
                           </div>
                        </SwiperSlide>
                     )
                  )}
               </div>
            }
         </Swiper>

         {/* sponser section */}
         <div className="bg-[#fff]">
            <div className=" w-[100%] md:w-[80%] py-10 px-5 md:px-0 mx-auto  flex items-center  flex-col md:flex-row   md:items-center">
               <div className="md:max-w-[300px] md:text-start text-center">
                  <h3 className="text-[18px] font-semibold text-[#333333]">
                     Our Most Trusted <br /> Supporting partners
                  </h3>
               </div>
               <div className="">
                  <div className="grid grid-cols-2 gap-y-3 pt-3 place-content-center place-items-center md:grid-cols-6">
                     <img
                        className="w-[150px] h-[65px] bg-cover"
                        src="https://demo1.imithemes.com/html/born-to-give/images/logo6.png"
                        alt=""
                     />
                     <img
                        className="md:w-[150px] h-[65px] bg-cover"
                        src="https://demo1.imithemes.com/html/born-to-give/images/logo2.png"
                        alt=""
                     />
                     <img
                        className="md:w-[150px] h-[65px] bg-cover"
                        src="https://demo1.imithemes.com/html/born-to-give/images/logo4.png"
                        alt=""
                     />
                     <img
                        className="md:w-[150px] h-[65px] bg-cover"
                        src="https://demo1.imithemes.com/html/born-to-give/images/logo1.png"
                        alt=""
                     />
                     <img
                        className="md:w-[150px] h-[65px] bg-cover"
                        src="https://demo1.imithemes.com/html/born-to-give/images/logo5.png"
                        alt=""
                     />
                     <img
                        className="md:w-[150px] h-[65px] bg-cover"
                        src="https://demo1.imithemes.com/html/born-to-give/images/logo6.png"
                        alt=""
                     />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Success;