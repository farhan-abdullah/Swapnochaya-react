import { FaBars, FaEye, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Header = () => {
   const [isOpen, setIsOpen] = useState(false);
   return (
      <>
         <div
            className="cursor-pointer md:hidden  flex items-center justify-between p-5"
            onClick={() => setIsOpen(!isOpen)}>
            <img
               className="w-[140px]"
               src="https://i.ibb.co/88NpLqP/m12.png"
               alt=""
            />
            <div>
               {isOpen ? (
                  <FaTimes className="text-4xl text-gray-200"></FaTimes>
               ) : (
                  <FaBars className="text-4xl text-gray-200"></FaBars>
               )}
            </div>
         </div>
         <nav
            className={`md:flex md:w-[85%] mx-auto md:justify-between z-40 md:h-[70px]  absolute  md:fixed md:p-6 md:px-14 backdrop-filter backdrop-blur-sm   left-0 right-0 duration-700 md:items-center ${
               isOpen ? "pt-10 md:p-0 bg-blue-950" : "-mt-80 md:mt-0"
            }`}>
            <div>
               <img
                  className="w-[140px] hidden md:block"
                  src="https://i.ibb.co/88NpLqP/m12.png"
                  alt=""
               />
            </div>
            <div className="uppercase text-gray-200 text-[14px] md:space-x-4 flex justify-between flex-col space-y-3 md:space-y-0 items-center md:flex-row">
               <span className="cursor-pointer font-semibold hover:text-secondary duration-700 delay-100">
                  About
               </span>
               <span className="cursor-pointer font-semibold hover:text-secondary duration-700 delay-100">
                  Blogs
               </span>
               <span className="cursor-pointer font-semibold hover:text-secondary duration-700 delay-100">
                  Project
               </span>
               <span className="cursor-pointer font-semibold hover:text-secondary duration-700 delay-100">
                  Events
               </span>
            </div>
         </nav>
      </>
   );
};

export default Header;
