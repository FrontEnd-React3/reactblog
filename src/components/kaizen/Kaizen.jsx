import "./kaizen.css";
import kaiz from "./images/kaizen.png";

export default function Kaizen() {
  return (
    <div id="bottom" className="kaizen">      
      <img
        className="kaizenImg"
        src={kaiz}
        alt={kaiz}
      />
      <div className="kaizenTitleSm">
      <br/> My aim is <br/><strong>to become a full stack developer.</strong><br/> Although, I have never met one. <br/>They always tend to be rather back end or <br/>front end. A lifetime of learning awaits me. <br/>Following the Japanese philosophy "  Kaizen* ",<br/>  - * desire for continuous improvement -  <br/>I am convinced that I will reach my goal. <br/>

Looking forward to your feedback, <br/>I remain, sincerely yours.
<br/><strong>Benedikt<br/></strong>

B.Lantsoght@gmail.com<br/>
t. 0499 388 227<br/>
</div>

    </div>
  );
}
