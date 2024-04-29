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
    <div className="destination-container">
      <div className="destinations-info-container">
        <span className="pick-your-destination">
          <strong>01</strong> Pick your destination
        </span>
        <div className="destination-content-container">
          <div className="planet-container">
            <img
              src={selectedDestination.image}
              alt={selectedDestination.name}
            />
          </div>
          <div className="destination-content">
            <div className="destination-tab-buttons">
              <ul>
                {destinationsData.map((destination) => (
                  <li
                    key={destination.id}
                    className={
                      selectedDestination.id === destination.id ? "active" : ""
                    }
                    onClick={() => handleTabChange(destination)}
                  >
                    {destination.name}
                  </li>
                ))}
              </ul>
            </div>
            <h1>{selectedDestination.name}</h1>
            <p className="planet-description">
              {selectedDestination.description}
            </p>
            <hr />
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
    </div>
  );
};

export default Destination;
