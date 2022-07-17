import React from "react";
import ReactDom from "react-dom";

function Card({
  setIsOpen,
  ijustneedone,
  isReadMore,
  toggleReadMore,
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
        {isReadMore ? ijustneedone.body.slice(0, 60) : ijustneedone.body}
        <span onClick={toggleReadMore} className="read-or-hide">
          {isReadMore ? "... read more" : " show less"}
        </span>
        {}
      </p>
    </div>
  );
}
export default Card;
