import React from "react";
import Head from "../Components/AlisaComponents/head";
import Catton from "../Components/AlisaComponents/continue/button";
import Artton from "../Components/AlisaComponents/continue/artton";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "../Components/AlisaComponents/continue/cont.css";

const Alisa2 = () => {
  return (
    <div className="page2A">
      <div id="else">
        <Head />
      </div>
      <div id="page2A">
        <Catton />
      </div>
      <div>{/* <Artton /> */}</div>
    </div>
  );
};

export default Alisa2;
