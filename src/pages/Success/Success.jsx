import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

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
            modules={[Navigation, Pagination, Scrollbar, A11y]}
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
                           <div className="grid gap-x-7 place-content-center place-items-center grid-cols-1 md:grid-cols-2">
                              <div className="w-full h-[340px] bg-cover">
                                 <img
                                    className="w-[100%]"
                                    src={scs.sImage}
                                    alt=""
                                 />
                              </div>
                              <div className="px-[20px] w-full ">
                                 <h2 className="text-[24px] mb-[15px]">
                                    {scs.sTitle}
                                 </h2>{" "}
                                 {/* Use 'scs.sTitle' instead of 'sTitle' */}
                                 <p className="text-[15px] text-[#898989] mb-[15px] max-w-[520px] ">
                                    {scs.sPara}
                                 </p>{" "}
                                 {/* Use 'scs.sPara' instead of 'sPara' */}
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
      </div>
   );
};

export default Success;
