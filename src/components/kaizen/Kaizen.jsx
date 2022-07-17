import "./kaizen.css";
import kaiz from "./images/kaizen.png";

export default function Kaizen() {
  return (
    <div className="kaizen">      <img
        className="kaizenImg"
        src={kaiz}
        alt={kaiz}
      />
      <div className="kaizenTitleSm">
      <br/> My aim is <br/><strong>to become a full stack developer.</strong><br/> Although, I have never met one. <br/>They always tend to be rather back end or <br/>front end, a lot of learning to be done from my side. <br/>Believing in the Kaizen principle,<br/> the desire for continious improvement <br/>will give me the strength to achieve my goal. <br/>

Looking forward to your feedback, <br/>I remain, sincerely yours.
<br/><strong>Benedikt<br/></strong>

B.Lantsoght@gmail.com<br/>
t. 0499 388 227<br/>
</div>

    </div>
  );
}
