import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"; import "./post.css"; import ReactDom from "react-dom";
import "./Modal.css";

const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "beige",
  borderradius: "10px !important",
  width: "80vmin",
  height: "80vmin",
  zIndex: 1000,
  boxShadow: "5px 5px 15px 0px rgb(0 60 70)"
};

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 80, 110, .4)",
  zIndex: 1000
};

function Modal({ setIsOpen, justone }) {
  useEffect(() => { Aos.init({ duration: 1000 }) }, [])

  return (
    <>
      <div style={OVERLAY_STYLES} />
      <div data-aos="fade-up" id="modCont" style={MODAL_STYLES}>
        <button id="btn" onClick={() => setIsOpen(false)}>
          x
        </button>

        <div>
          <img className="modalImg" src={justone.imgMod} alt={justone.imgMod} />
          <div className="modalBodyCont">
            <span className="grayBody modalBody">
              {justone.body.slice(0, 58)}
              {/* {justone.id == id ? (justone.body).slice(0, 60) : "Nothing"} */}
            </span>
            <span className="blueBody modalBody">
              {justone.body.slice(58, 1500)}
            </span>
            <div className="blueBody modalBody spacer">{justone.body1}</div>{" "}
            <div className="blueBody modalBody spacer">{justone.body2}</div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Modal;