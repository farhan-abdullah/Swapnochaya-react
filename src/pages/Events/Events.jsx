import React from "react";

const Events = () => {
   return (
      <>
         {/* // completed task */}
         <div className="bg-white my-[100px]">
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
         <div className="grid md:grid-cols-2 ">
            <div className="bg-white"></div>
            <div className="bg-primary"></div>
         </div>
      </>
   );
};

export default Events;
