import SectionCard from "./sectionCard";
import "../css/BtnCarousel.css";
import { useState } from "react";
import pets from "../pets/pets";

function BtnCarousel() {
  const [startIndex, setStartIndex] = useState(0);
  const cardsPerPage = 4;

  const nextCard = () => {
    if (startIndex + cardsPerPage < pets.length) {
      setStartIndex((prevStartIndex) => prevStartIndex + cardsPerPage);
    } else {
      setStartIndex(0);
    }
  };

  const prevCard = () => {
    if (startIndex === 0) {
      setStartIndex(pets.length - cardsPerPage);
    } else {
      setStartIndex((prevStartIndex) => prevStartIndex - cardsPerPage);
    }
  };

  const visibleCards = pets.slice(startIndex, startIndex + cardsPerPage);

  return (
    <div className="app">
      <button className="carousel-button" onClick={prevCard}>
        &#9664;
      </button>
      <div className="containerCarousel">
        {visibleCards.map(({ image, name, age, city, description, razza, nameImage }, index) => (
          <div
            key={index}
            className="carousel-card"
          >
            <SectionCard
              image={image}
              name={name}
              age={age}
              city={city}
              description={description}
              razza={razza}
              nameImage={nameImage}
            />
          </div>
        ))}
      </div>
      <button className="carousel-button" onClick={nextCard}>
        &#9654;
      </button>
    </div>
  );
}

export default BtnCarousel;

