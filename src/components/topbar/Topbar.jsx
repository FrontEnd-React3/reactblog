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
          </li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACT</li>
        </ul>

      </div>
      <div className="topRight">
       
            <img
              className="topImg"
              src={me}
              alt={me}
            />
        
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}
