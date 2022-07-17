import React, { useState } from "react";
import "./post.css";
import { Data } from "./data";
import Modal from "./Modal";
import Card from "../Card/Card";

export default function Post() {
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  const [selectedCard, setSelectedCard] = useState();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="postwrapper">
      {Data.map((ijustneedone) => (
        <div key={ijustneedone.id}>
          <div className="post">
            <Card
              setIsOpen={setIsOpen}
              toggleReadMore={toggleReadMore}
              ijustneedone={ijustneedone}
              isReadMore={isReadMore}
              setSelectedCard={setSelectedCard}
            />
          </div>
        </div>
      ))}
      {isOpen && <Modal justone={selectedCard} setIsOpen={setIsOpen} />}
    </div>
  );
}
