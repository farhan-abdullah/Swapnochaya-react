import React from "react";
// import Carousel from "../Carosel/Carosel";
import Featured from "../Featured/Featured";
import Carosel from "../Carosel/Carosel";
import Block from "../../Block/Block";
import Events from "../../Events/Events";
import Devasted from "../../Devasted/Devasted";
import Success from "../../Success/Success";
import Blogs from "../../Blogs/Blogs";

const Home = () => {
   return (
      <div>
         <Carosel></Carosel>
         <Featured></Featured>
         <Block></Block>
         <Events></Events>
         <Devasted></Devasted>
         <Success></Success>
         <Blogs></Blogs>
      </div>
   );
};

export default Home;
