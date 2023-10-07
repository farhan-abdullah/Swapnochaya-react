import React from "react";

const Block = () => {
   const cards = [
      {
         donatedImage:
            "https://demo1.imithemes.com/html/born-to-give/images/causeg2.jpg",
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
            "https://demo1.imithemes.com/html/born-to-give/images/causeg2.jpg",
         donatedTitle: "Help relocate the refuses",
         TotalDonated: 21840,
      },
      {
         donatedImage:
            "https://demo1.imithemes.com/html/born-to-give/images/causeg2.jpg",
         donatedTitle: "Help relocate the refuses",
         TotalDonated: 21840,
      },
   ];

   return (
      <div className="max-w-[85%] mx-auto">
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
            <div className="grid grid-cols-2 gap-x-7  md:grid-cols-4 ">
               {cards.map((item, index) => (
                  <div
                     key={index}
                     className="card w-[260px] bg-white shadow-xl shadow-gray-800/40 h-[365px]">
                     <img
                        className="w-[265px] h-[176px] bg-cover"
                        src={item.donatedImage}
                        alt={item.donatedTitle}
                     />
                     <div className="p-[40px]">
                        <h2 className="text-[16px] font-semibold text-center leading-[24px] uppercase text-[#333]">
                           {item.donatedTitle}
                        </h2>
                        <p>Total Donated: {item.TotalDonated}</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
};

export default Block;
