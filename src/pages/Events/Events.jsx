import React from "react";
// import gImage1 from "../../assets/";
const Events = () => {
   const gallery = [
      { image: "https://i.ibb.co/TYvWsby/gallery6.jpg" },
      { image: "https://i.ibb.co/WV1m6PV/gallery4.jpg" },
      { image: "https://i.ibb.co/CM4j7nd/gallery3.jpg" },
      { image: "https://i.ibb.co/XzZRPg0/gallery1.jpg" },
      {
         image: "https://i.ibb.co/6m1qNbq/event1.jpg",
      },
      { image: "https://i.ibb.co/CM4j7nd/gallery3.jpg" },
   ];

   return (
      <>
         {/* // completed task */}
         <div className="bg-white mt-[100px]">
            <div className="finished-project-container  grid grid-cols-2 md:grid-cols-4 mx-auto">
               <div className="flex flex-col space-y-2 h-[125px] border border-gray-500/40 justify-center items-center">
                  <p className="font-sans text-[12px] uppercase text-[#0000004d]">
                     Successful project
                  </p>
                  <h2 className="text-[30px] text-[#333333] font-bold">1200</h2>
               </div>
               <div className="flex flex-col space-y-2 h-[125px] border border-gray-500/40 justify-center items-center">
                  <p className="font-sans text-[12px] uppercase text-[#0000004d]">
                     Successful project
                  </p>
                  <h2 className="text-[30px] text-[#333333] font-bold">1200</h2>
               </div>
               <div className="flex flex-col space-y-2 h-[125px] border border-gray-500/40 justify-center items-center">
                  <p className="font-sans text-[12px] uppercase text-[#0000004d]">
                     Successful project
                  </p>
                  <h2 className="text-[30px] text-[#333333] font-bold">1200</h2>
               </div>
               <div className="flex flex-col space-y-2 h-[125px] border border-gray-500/40 justify-center items-center">
                  <p className="font-sans text-[12px] uppercase text-[#0000004d]">
                     Successful project
                  </p>
                  <h2 className="text-[30px] text-[#333333] font-bold">1200</h2>
               </div>
            </div>
         </div>
         {/* // upcoming events */}
         <div className="grid md:grid-cols-2  ">
            <div className="bg-white px-3 pt-4 md:pt-0 md:pl-[60px]">
               <div className="md:mb-[40px]">
                  <h2 className="text-[38px] md:text-[36px]  text-start py-4 font-semibold md:pb-0 pb-2 ">
                     Upcoming events
                  </h2>
                  <div className="w-[60px] h-[2px]  bg-primary"></div>
               </div>
               {/* end the title */}

               <div className="event-container">
                  <div className="flex border-b-[1px] my-5 border-gray-300/70 pb-3 gap-x-7 justify-center items-center ">
                     <div className="  bg-primary px-4 py-1">
                        <h1 className="text-center text-[34px] text-[#ffffff]">
                           14
                        </h1>
                        <hr />
                        <h2 className="text-[#ffffff] uppercase mt-1 text-center text-[15px]">
                           JAN
                           <br />
                           2016
                        </h2>
                     </div>
                     <div>
                        <span className="text-[12px] text-[#0000004d]">
                           Thursday, 11:20 AM
                        </span>
                        <h3 className="text-[18px] text-[#333] font-semibold py-1">
                           Summer Camp: Student get together
                        </h3>
                        <p className="text-[15px] text-[#898989]">
                           Lorem ipsum dolor sit amet, consectet adipiscing elit
                           Cras sed nunc massa. Quisque tempor dolor sit amet
                           tellus malesuada...
                        </p>
                     </div>
                  </div>
                  <div className="flex border-b-[1px] my-5 border-gray-300/70 pb-3 gap-x-7 justify-center items-center ">
                     <div className="  bg-primary px-4 py-1">
                        <h1 className="text-center text-[34px] text-[#ffffff]">
                           14
                        </h1>
                        <hr />
                        <h2 className="text-[#ffffff] uppercase mt-1 text-center text-[15px]">
                           JAN
                           <br />
                           2016
                        </h2>
                     </div>
                     <div>
                        <span className="text-[12px] text-[#0000004d]">
                           Thursday, 11:20 AM
                        </span>
                        <h3 className="text-[18px] text-[#333] font-semibold py-1">
                           Summer Camp: Student get together
                        </h3>
                        <p className="text-[15px] text-[#898989]">
                           Lorem ipsum dolor sit amet, consectet adipiscing elit
                           Cras sed nunc massa. Quisque tempor dolor sit amet
                           tellus malesuada...
                        </p>
                     </div>
                  </div>
                  <div className="flex border-b-[1px] my-5 border-gray-300/70 pb-3 gap-x-7 justify-center items-center ">
                     <div className="  bg-primary px-4 py-1">
                        <h1 className="text-center text-[34px] text-[#ffffff]">
                           14
                        </h1>
                        <hr />
                        <h2 className="text-[#ffffff] uppercase mt-1 text-center text-[15px]">
                           JAN
                           <br />
                           2016
                        </h2>
                     </div>
                     <div>
                        <span className="text-[12px] text-[#0000004d]">
                           Thursday, 11:20 AM
                        </span>
                        <h3 className="text-[18px] text-[#333] font-semibold py-1">
                           Summer Camp: Student get together
                        </h3>
                        <p className="text-[15px] text-[#898989]">
                           Lorem ipsum dolor sit amet, consectet adipiscing elit
                           Cras sed nunc massa. Quisque tempor dolor sit amet
                           tellus malesuada...
                        </p>
                     </div>
                  </div>
                  <div className="flex border-b-[1px] my-5 border-gray-300/70 pb-3 gap-x-7 justify-center items-center ">
                     <div className="  bg-primary px-4 py-1">
                        <h1 className="text-center text-[34px] text-[#ffffff]">
                           14
                        </h1>
                        <hr />
                        <h2 className="text-[#ffffff] uppercase mt-1 text-center text-[15px]">
                           JAN
                           <br />
                           2016
                        </h2>
                     </div>
                     <div>
                        <span className="text-[12px] text-[#0000004d]">
                           Thursday, 11:20 AM
                        </span>
                        <h3 className="text-[18px] text-[#333] font-semibold py-1">
                           Summer Camp: Student get together
                        </h3>
                        <p className="text-[15px] text-[#898989]">
                           Lorem ipsum dolor sit amet, consectet adipiscing elit
                           Cras sed nunc massa. Quisque tempor dolor sit amet
                           tellus malesuada...
                        </p>
                     </div>
                  </div>
               </div>
            </div>
            <div className="bg-primary">
               <div className="gallery-container">
                  <div className="grid grid-cols-2 place-items-center max-w-[560px] px-3 mx-auto place-content-start gap-0 py-3  md:py-[80px]">
                     {gallery.map((glr, index) => (
                        <>
                           <div key={index} className="">
                              <img
                                 className=" bg-cover"
                                 src={glr.image}
                                 alt=""
                              />
                           </div>
                        </>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default Events;
