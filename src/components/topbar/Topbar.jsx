import React from "react"
// import { Link } from "react-router-dom";
import "./topbar.css";
import logoasp from "./logoasp.png"
import me from "./benedikt.png"
import ReactTooltip from 'react-tooltip';
import { Link } from 'react-scroll'

export default function Topbar() {
  const user = true;
  return (
    <div className="top">
      <div className="topLeft">
        <Link className="linklogo" to="top" smooth={true} duration={500}>
          
          <img className="topLeftlogo" src={logoasp} alt="asplogo" />
        </Link>
      </div>
      <div className="topCenter">
        <ul className="topList">


          <li className="topListItem">
            <Link className="link" to="top" smooth={true} duration={500}>
              HOME
            </Link>

          </li>
          <li className="topListItem">
            <Link to="bottom" smooth={true} duration={500}>
              MY GOAL
            </Link>
          </li>
          <li className="topListItem"><a className=" topListanchor" target="blank" href="https://www.letmesee.be">ABOUT ME</a></li>
        </ul>

      </div>
      <div className="topRight">
        <ReactTooltip place="bottom" type="info" effect="float" />

        <div data-tip="0499 388 227" className="antimover">
          <i className="topSearchIcon fas fa-phone"></i>
        </div>

        <a className=" topListanchor" target="blank" href="https://www.letmesee.be">
          <img
            className="topImg"
            src={me}
            alt={me}
          />
        </a>
      </div>
    </div>
  );
}
