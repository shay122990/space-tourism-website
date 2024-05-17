import { useState } from "react";
import "./Destination.css";
import destinationsData from "../../data/destinations.js";

const Destination = () => {
  const [selectedDestination, setSelectedDestination] = useState(
    destinationsData[0]
  );

  const handleTabChange = (destination) => {
    setSelectedDestination(destination);
  };

  return (
    <div className="destination-home-page">
      <main className="main-destination-container">
        <h1 className="pick-your-destination">
          <strong>01</strong> Pick your destination
        </h1>
        <div className="planets-content">
          <div className="destination-image">
            <img
              src={selectedDestination.image}
              alt={selectedDestination.name}
            />
          </div>
          <div className="destination-info">
            <nav className="destination-tab-buttons">
              <ul>
                {destinationsData.map((destination) => (
                  <li key={destination.id}>
                    <button
                      className={
                        selectedDestination.id === destination.id
                          ? "active"
                          : ""
                      }
                      onClick={() => handleTabChange(destination)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          handleTabChange(destination);
                        }
                      }}
                    >
                      {destination.name}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="destination-details">
              <h2 className="destination-name">{selectedDestination.name}</h2>
              <p className="planet-description">
                {selectedDestination.description}
              </p>
              <hr className="planet-lane" />
              <div className="distance-travel-container">
                <div>
                  <span>Avg. Distance</span>
                  <h3>{selectedDestination.distance}</h3>
                </div>
                <div>
                  <span>Est. Travel Time</span>
                  <h3>{selectedDestination.travel}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Destination;
