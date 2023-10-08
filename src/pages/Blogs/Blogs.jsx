import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import "./Blog.css";
import "swiper/css";
import "swiper/css/pagination";

const Blogs = () => {
   const blogs = [
      {
         bImage:
            "https://demo1.imithemes.com/html/born-to-give/images/post1.jpg",
         bTitle: "A single person can change million lives",
         bDate: "Posted on 11th dec 2015",
      },
      {
         bImage:
            "https://demo1.imithemes.com/html/born-to-give/images/post1.jpg",
         bTitle: "A single person can change million lives",
         bDate: "Posted on 11th dec 2015",
      },
      {
         bImage:
            "https://demo1.imithemes.com/html/born-to-give/images/post2.jpg",
         bTitle: "A single person can change million lives",
         bDate: "Posted on 11th dec 2015",
      },
      {
         bImage:
            "https://demo1.imithemes.com/html/born-to-give/images/post3.jpg",
         bTitle: "A single person can change million lives",
         bDate: "Posted on 11th dec 2015",
      },
      {
         bImage:
            "https://demo1.imithemes.com/html/born-to-give/images/post1.jpg",
         bTitle: "A single person can change million lives",
         bDate: "Posted on 11th dec 2015",
      },
   ];

   return (
      <div className="w-[85%] mx-auto grid grid-cols-1 py-[100px] gap-x-4 md:grid-cols-2">
         <div className="">
            <div>
               <h1 className="text-[36px] pb-3 leading-none text-[#333333] font-semibold">
                  Latest news from our
                  <br /> blog
               </h1>
               <div className="w-[80px] h-[2px] bg-primary"></div>
            </div>

            <p className="my-5">
               Vestibulum quam nisi, pretium a nibh sit amet, consectetur
               hendrerit mi. Aenean imperdiet lacus sit amet elit porta, et
               malesuada erat bibendum. Cras sed nunc massa. Quisque tempor
               dolor sit amet tellus malesuada, malesuada iaculis eros
               dignissim.
            </p>
         </div>
         <div className="">
            <Swiper
               modules={[Pagination]}
               spaceBetween={30}
               slidesPerView={2} // Default slides per view for larger screens
               pagination={{ clickable: true }}
               onSwiper={(swiper) => console.log(swiper)}
               breakpointsBase={{
                  590: {
                     slidesPerView: 1,
                  },
                  768: {
                     slidesPerView: 1,
                  },
               }}>
               {blogs.map((blg, index) => (
                  <div key={index}>
                     <SwiperSlide>
                        <div className="relative mb-10">
                           <div className="gradient-overlay"></div>
                           <img src={blg.bImage} className="" alt="" />
                           <div className="absolute text-gray-200 p-2 bottom-0">
                              <h2 className="text-[18px] text-white  leading-none">
                                 {blg.bTitle}
                              </h2>
                              <span className="text-[12px] uppercase">
                                 {blg.bDate}
                              </span>
                           </div>
                        </div>
                     </SwiperSlide>
                  </div>
               ))}
            </Swiper>
         </div>
      </div>
   );
};

export default Blogs;
