import React from "react";
// import Carousel from "../Carosel/Carosel";
import Featured from "../Featured/Featured";
import Carosel from "../Carosel/Carosel";
import Block from "../../Block/Block";
import Events from "../../Events/Events";
import Devasted from "../../Devasted/Devasted";
import Success from "../../Success/Success";

const Home = () => {
   return (
      <div>
         <Carosel></Carosel>
         <Featured></Featured>
         <Block></Block>
         <Events></Events>
         <Devasted></Devasted>
         <Success></Success>
      </div>
   );
};

export default Home;
