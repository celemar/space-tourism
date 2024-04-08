import React, { useEffect, useState } from "react";
import data from "../data.json";

const Destination = () => {
  const [selectedDestination, setSelectedDestination] = useState(
    data.destinations[0]
  );

  const handleDestinationChange = (destination) => {
    setSelectedDestination(destination);
  };

  return (
    <section className="destination">
      <div className="destination-container--left">
        <h1 className="section-title">
          <span aria-hidden="true">01</span>Pick Your Destination
        </h1>
        <picture>
          <source srcSet={selectedDestination.images.webp} type="images/webp" />
          <img
            className="destination-img"
            src={selectedDestination.images.png}
            alt={selectedDestination.name}
          />
        </picture>
      </div>

      <div className="destination-container--right">
        <div className="destination-tab underline-indicators">
          {data.destinations.map((destination) => (
            <button
              aria-selected={
                destination === selectedDestination ? "true" : "false"
              }
              key={destination.name}
              onClick={() => handleDestinationChange(destination)}
            >
              {destination.name}
            </button>
          ))}
        </div>
        <article className="destination-details">
          <h2>{selectedDestination.name}</h2>
          <p className="small-text">{selectedDestination.description}</p>

          <div className="destination-info">
            <div>
              <h3>Avg. distance</h3>
              <p>{selectedDestination.distance}</p>
            </div>

            <div>
              <h3>Est. travel time</h3>
              <p>{selectedDestination.travel}</p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Destination;
