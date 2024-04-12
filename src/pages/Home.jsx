import React from "react";
import { Link } from "react-router-dom";

const Home = ({ setActiveLink }) => {
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
  return (
    <main>
      <div className="container even-columns home">
        <div className="page-left">
          <h1>
            So, you want to travel to
            <span>Space</span>
          </h1>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="page-right">
          <Link
            to="/Destination"
            className="large-button"
            onClick={() => handleLinkClick("/Destination")}
            aria-label="Explore Destination"
          >
            Explore
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Home;
