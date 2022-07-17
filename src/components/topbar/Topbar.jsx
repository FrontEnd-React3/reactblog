import { Link } from "react-router-dom";
import "./topbar.css";
import logoasp from "./logoasp.png"
import me from "./benedikt.png"

export default function Topbar() {
  const user = true;
  return (
    <div className="top">
      <div className="topLeft">
        <img className="topLeftlogo" src={logoasp} alt="asplogo" />
      </div>
      <div className="topCenter">
        <ul className="topList">


          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
            
          </li>          <li className="topListItem">MY GOAL</li>
          <li className="topListItem"><a className=" topListanchor" target="blank" href="https://www.letmesee.be">ABOUT ME</a></li>
        </ul>

      </div>
      <div className="topRight">
        <div className="antimover">
        <i className="topSearchIcon fas fa-info-circle"></i></div>
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
