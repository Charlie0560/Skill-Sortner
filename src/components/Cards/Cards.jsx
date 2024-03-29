import React from "react";
import Card from "../Card/Card";

function Cards({ filter }) {
  const cards = [
    
    { InterestedIn: "Web Developer" },
    { InterestedIn: "App Developer" },
    { InterestedIn: "Game Developer" },
    { InterestedIn: "Competitive Programmer" },
    { InterestedIn: "Data Analyst" },
    { InterestedIn: "Management" },
  ];
  return (
    <div className="container">
      <div className="row">
        {cards.map((c) => (c.InterestedIn===filter|| filter==="All")  && <Card data={c} />)}
      </div>
    </div>
  );
}

export default Cards;
