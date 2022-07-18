import React from "react";
import ReactDom from "react-dom";
import ReadMoreReact from 'read-more-react';


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
        <ReadMoreReact 
        min={50}
            ideal={60}
            max={70}
            readMoreText="... read more"
        text={ijustneedone.body} />
      </p>
    </div>
  );
}
export default Card;
