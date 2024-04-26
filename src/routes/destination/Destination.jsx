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
        <p>
          <span>01</span> Pick your destination
        </p>
        <div className="destination-tab-buttons">
          {destinationsData.map((destination) => (
            <button
              key={destination.id}
              className={
                selectedDestination.id === destination.id ? "active" : ""
              }
              onClick={() => handleTabChange(destination)}
            >
              {destination.name}
            </button>
          ))}
        </div>
        <div className="destination-content">
          <h2>{selectedDestination.name}</h2>
          <p>{selectedDestination.description}</p>
          <img src={selectedDestination.image} alt={selectedDestination.name} />
          <p>{selectedDestination.distance}</p>
          <p>{selectedDestination.travel}</p>
        </div>
      </div>
    </div>
  );
};

export default Destination;
