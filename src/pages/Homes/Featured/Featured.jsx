import React from "react";

const Featured = () => {
   return (
      <div className="w-full grid md:grid-cols-3 bg-blue-400">
         <div className="bg-blue-500 h-[90px] flex justify-center items-center">
            <h2 className="text-4xl uppercase font-bold text-white text-center">
               Donate now
            </h2>
         </div>
         <div className="bg-blue-600 h-[90px] flex justify-center items-center">
            <h2 className="text-4xl uppercase font-bold text-white text-center">
               Join us now
            </h2>
         </div>
         <div className="bg-blue-700 uppercase h-[90px] flex justify-center items-center">
            <h2 className="text-4xl font-bold text-white text-center">
               Get involved
            </h2>
         </div>
      </div>
   );
};

export default Featured;

// hyper text markup language
