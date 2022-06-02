import React from "react";
import Card from "../Card/Card";

function Cards() {
  const cards = ["a", "b", "c", "d"];
  return (
    <div class="container">
      <div className="row">
        {cards.map((c) => (
          <Card />
        ))}
      </div>
    </div>
  );
}

export default Cards;
