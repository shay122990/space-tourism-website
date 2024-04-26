import { useState } from "react";
import "./Technology.css";
import technologyData from "../../data/technology.js";

const Technology = () => {
  const [selectedTechnology, setSelectedTechnology] = useState(
    technologyData[0]
  );

  const handleTabChange = (technology) => {
    setSelectedTechnology(technology);
  };

  return (
    <div className="technology-container">
      <div className="technology-info-container">
        <p>
          <span>03</span> Select your technology
        </p>
        <div className="tech-tab-buttons">
          {technologyData.map((technology) => (
            <button
              key={technology.id}
              className={
                selectedTechnology.id === technology.id ? "active" : ""
              }
              onClick={() => handleTabChange(technology)}
            >
              {technology.name}
            </button>
          ))}
        </div>
        <div className="technology-content">
          <h2>{selectedTechnology.name}</h2>
          <p>{selectedTechnology.description}</p>
          <img
            src={selectedTechnology.images.landscape}
            alt={selectedTechnology.name}
          />
        </div>
      </div>
    </div>
  );
};

export default Technology;
