import React from "react";
// import Carousel from "../Carosel/Carosel";
import Featured from "../Featured/Featured";
import Carosel from "../Carosel/Carosel";
import Block from "../../Block/Block";

const Home = () => {
   return (
      <div>
         <Carosel></Carosel>
         <Featured></Featured>
         <Block></Block>
      </div>
   );
};

export default Home;
