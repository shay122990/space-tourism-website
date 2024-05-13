import { useState, useEffect } from "react";
import "./Technology.css";
import technologyData from "../../data/technology.js";

const Technology = () => {
  const [selectedTechnology, setSelectedTechnology] = useState(
    technologyData[0]
  );
  const [imageSrc, setImageSrc] = useState(selectedTechnology.images.portrait);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1000) {
        setImageSrc(selectedTechnology.images.portrait);
      } else {
        setImageSrc(selectedTechnology.images.landscape);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [selectedTechnology]);

  const handleTabChange = (technology) => {
    setSelectedTechnology(technology);
  };

  return (
    <div className="technology-home-container">
      <div className="main-tech-container">
        <h1 className="space-launch">
          <strong>03</strong> Space launch 101
        </h1>
        <div className="technology-content">
          <div className="tech-details">
            <div className="tech-tab-buttons">
              {technologyData.map((technology) => (
                <button
                  key={technology.id}
                  className={
                    selectedTechnology.id === technology.id ? "active" : ""
                  }
                  onClick={() => handleTabChange(technology)}
                >
                  {technology.id + 1}
                </button>
              ))}
            </div>
            <div className="tech-info">
              <span className="terminology">the terminology...</span>
              <h2 className="tech-name">{selectedTechnology.name}</h2>
              <p className="tech-description">
                {selectedTechnology.description}
              </p>
            </div>
          </div>
          <div className="tech-image">
            <img src={imageSrc} alt={selectedTechnology.name} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
