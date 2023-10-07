import React from "react";
// import Carousel from "../Carosel/Carosel";
import Featured from "../Featured/Featured";
import Carosel from "../Carosel/Carosel";
import Block from "../../Block/Block";
import Events from "../../Events/Events";
import Devasted from "../../Devasted/Devasted";

const Home = () => {
   return (
      <div>
         <Carosel></Carosel>
         <Featured></Featured>
         <Block></Block>
         <Events></Events>
         <Devasted></Devasted>
      </div>
   );
};

export default Home;
