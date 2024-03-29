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
    <section className="even-columns destination">
      <div className="destination-section-left">
        <h1 className="section-title">
          <span aria-hidden="true">01</span>Pick Your Destination
        </h1>
        <img
          className="destination-img"
          src={selectedDestination.images.png}
          alt={selectedDestination.name}
        />
      </div>
      <div className="destination-section-right">
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

        <article>

          <h2>{selectedDestination.name}</h2>
          <p>{selectedDestination.description}</p>

          <div className="info-wrapper">

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
