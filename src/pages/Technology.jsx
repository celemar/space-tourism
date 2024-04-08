import React, { useState } from "react";
import data from "../data.json";

const Technology = () => {
  const [selectedTechnology, setSelectedTechnology] = useState(
    data.technology[0]
  );
  const handleTechnologyChange = (technology) => {
    setSelectedTechnology(technology);
  };

  return (
    <section className="technology">
      <div className="technology-container--left">
        <h1 className="section-title">
          <span aria-hidden="true">03</span>Space Launch 101
        </h1>

        <div className="wrapper">
          <div className="dot-indicators dot-wrapper">
            {data.technology.map((technology, index) => (
              <button
                key={technology.name}
                className="numbered-button"
                data-number={index + 1}
                onClick={() => handleTechnologyChange(technology)}
                aria-selected={
                  technology === selectedTechnology ? "true" : "false"
                }
              >
                <span class="sr-only">{technology.name}</span>
              </button>
            ))}
          </div>
          <article className="technology-details">
            <h2>The Terminology...</h2>
            <p className="technology-name">{selectedTechnology.name}</p>
            <p className="small-text">{selectedTechnology.description}</p>
          </article>
        </div>
      </div>
      
      <div className="technology-container--right">

        <picture>
          <source
            media="(min-width: 768px)"
            srcSet={selectedTechnology.images.portrait}
            type="image/jpeg"
          />
          <source
            srcSet={selectedTechnology.images.landscape}
            type="image/jpeg"
          />
          <img
            className="technology-img"
            src={selectedTechnology.images.portrait}
            alt={selectedTechnology.name}
          />
        </picture>
        
      </div>
    </section>
  );
};

export default Technology;
