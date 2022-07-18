import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./header.css";
import hero from "./images/reactt2.png";


export default function Header() {
  useEffect(() => { Aos.init({ duration: 2000 }) }, [])
  return (
    <div className="header">
      <div id="top"></div>
      <div className="headerTitles">
        <span data-aos="fade-up" className="headerTitleSm">To React or not to React, that's the question...</span>
      </div>
      <img
        className="headerImg"
        src={hero}
        alt=""
      />
    </div>
  );
}
