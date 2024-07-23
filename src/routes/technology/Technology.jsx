import { useState, useEffect } from "react";
import "./Technology.css";
import technologyData from "../../data/technology.js";
import Tabs from "../../components/tabs/Tabs.jsx";

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

  return (
    <div className="page-container technology-home-container">
      <div className="main-tech-container">
        <h1 className="space-launch">
          <strong>03</strong> Space launch 101
        </h1>
        <div className="technology-content">
          <div className="tech-details">
            <Tabs
              items={technologyData}
              selectedItem={selectedTechnology}
              onTabChange={setSelectedTechnology}
              renderTabLabel={(tech) => tech.id + 1}
              className="tech-tab-buttons"
            />
            <div className="tech-info">
              <span className="terminology">The terminology...</span>
              <h2 className="tech-name">{selectedTechnology.name}</h2>
              <p className="tech-description">
                {selectedTechnology.description}
              </p>
            </div>
          </div>
          <div
            id={`technology-panel-${selectedTechnology.id}`}
            role="tabpanel"
            aria-labelledby={`technology-tab-${selectedTechnology.id}`}
            className="tech-image"
          >
            <img src={imageSrc} alt={selectedTechnology.name} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
