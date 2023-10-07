import React from "react";

const Block = () => {
   const cards = [
      {
         donatedImage:
            "https://demo1.imithemes.com/html/born-to-give/images/causeg5.jpg",
         donatedTitle: "Help relocate the refuses",
         TotalDonated: 21840,
      },
      {
         donatedImage:
            "https://demo1.imithemes.com/html/born-to-give/images/causeg1.jpg",
         donatedTitle: "Help relocate the refuses",
         TotalDonated: 21840,
      },
      {
         donatedImage:
            "https://demo1.imithemes.com/html/born-to-give/images/causeg2.jpg",
         donatedTitle: "Help relocate the refuses",
         TotalDonated: 21840,
      },
      {
         donatedImage:
            "https://demo1.imithemes.com/html/born-to-give/images/causeg6.jpg",
         donatedTitle: "Help relocate the refuses",
         TotalDonated: 21840,
      },
   ];

   return (
      <div className="w-[90%] md:max-w-[85%] mx-auto">
         <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 my-10 md:my-[100px]">
            <div>
               <h2 className="max-w-[450px] text-center md:text-start text-black/75 font-semibold text-[36px]">
                  Causes that need your urgent attention
               </h2>
               <div className="w-[100px] hidden md:block  bg-blue-500/60 h-[2px] mt-2"></div>
            </div>
            <p className="max-w-[675px] text-center md:text-start mx-auto text-[#898989]">
               Vestibulum quam nisi, pretium a nibh sit amet, consectetur
               hendrerit mi. Aenean imperdiet lacus sit amet elit porta, et
               malesuada erat bibendum. Cras sed nunc massa. Quisque tempor
               dolor sit amet tellus malesuada, malesuada iaculis eros
               dignissim. Aenean vitae diam id lacus fringilla maximus. Mauris
               auctor efficitur nisl, non blandit urna fermentum nec.
            </p>
         </div>

         {/* black card start from here */}

         <div>
            <div className="grid grid-cols-1  md:gap-y-0 gap-x-7  md:grid-cols-4 2xl:grid-cols-5 ">
               {cards.map((item, index) => (
                  <div
                     key={index}
                     className="card my-4 md:my-0 md:w-[260px] bg-white shadow-md shadow-gray-800/40 h-[365px]">
                     <img
                        className="md:w-[265px] w-full h-[176px] bg-cover"
                        src={item.donatedImage}
                        alt={item.donatedTitle}
                     />
                     <div className="p-[40px]">
                        <h2 className="text-[16px] font-semibold md:text-center leading-[24px] uppercase text-[#333]">
                           {item.donatedTitle}
                        </h2>
                        <p className="uppercase text-center pt-5 font-semibold text-gray-500">
                           Donated:{" "}
                           <span className="text-blue-400">
                              {" "}
                              {item.TotalDonated}
                           </span>
                        </p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
};

export default Block;
