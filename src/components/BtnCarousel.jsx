import SectionCard from "./sectionCard";
import "../css/BtnCarousel.css";
import { useRef } from "react";
import pets from "../pets/pets";

function BtnCarousel() {
  const containerRef = useRef(null);

  const scrollNext = () => {
    const container = containerRef.current;
    container.scrollLeft += 1275;
  };

  const scrollPrev = () => {
    const container = containerRef.current;
    container.scrollLeft -= 1275;
  };

  return (
    <div className="app">
      <button className="carousel-button" onClick={scrollPrev}>
        &#9664;
      </button>
      <div className="containerCarousel" ref={containerRef}>
        {pets.map(
          (
            { image, name, age, city, description, razza, nameImage,owner },
            index
          ) => (
            <div key={index} className="carousel-card">
              <SectionCard
                image={image}
                name={name}
                age={age}
                city={city}
                description={description}
                razza={razza}
                nameImage={nameImage}
                owner={owner}
              />
            </div>
          )
        )}
      </div>
      <button className="carousel-button" onClick={scrollNext}>
        &#9654;
      </button>
    </div>
  );
}

export default BtnCarousel;
