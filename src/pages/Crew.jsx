import React, { useState } from "react";
import data from "../data.json";

const Crew = () => {
  const [selectedCrew, setSelectedCrew] = useState(data.crew[0]);

  const handleCrewChange = (crew) => {
    setSelectedCrew(crew);
  };

  return (
    <section className="crew even-columns">
      <div className="crew-left ">
        <h1 className="section-title">
          <span aria-hidden="true">02</span>Meet your crew
        </h1>
        <div>
          {" "}
          <img
            className="crew-img"
            src={selectedCrew.images.png}
            alt={selectedCrew.name}
          />
        </div>
        <article class="crew-details">
          <h2 className="crew-role">{selectedCrew.role}</h2>
          <p className="crew-name">{selectedCrew.name}</p>
          <p className="small-text">{selectedCrew.bio}</p>
        </article>

        <div class="dot-indicators dot-wrapper">
          {data.crew.map((crew) => (
            <button
              onClick={() => handleCrewChange(crew)}
              aria-selected={crew === selectedCrew ? "true" : "false"}
              key={crew.name}
            >
              <span class="sr-only">{crew.name}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Crew;
