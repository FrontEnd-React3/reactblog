import React from "react";
import ReactDom from "react-dom";

function Card({
  setIsOpen,
  ijustneedone,
  isReadMore,
  setSelectedCard
}) {
  return (
    <div
      type="button"
      onClick={() => {
        setIsOpen(true);
        setSelectedCard(ijustneedone);
      }}
    >
      <img
        className="postImg"
        src={ijustneedone.image}
        alt={ijustneedone.image}
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat"></span>
        </div>
        <span className="postTitle">{ijustneedone.title}</span>
        <hr />
        <span className="postDate">{ijustneedone.subtitle} </span>
      </div>
      <p className="postDesc">
        {isReadMore ? ijustneedone.body.substr(0, 60).substr(0, Math.min(ijustneedone.body.substr(0, 60).length, ijustneedone.body.substr(0, 60).lastIndexOf(" "))) : ijustneedone.body}
        <span>
          {isReadMore ? "... read more" : " show less"}
        </span>
        {}
      </p>
    </div>
  );
}
export default Card;
