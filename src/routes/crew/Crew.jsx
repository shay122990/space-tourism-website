import { useState } from "react";
import "./Crew.css";
import crewData from "../../data/crew.js";

const Crew = () => {
  const [selectedCrew, setSelectedCrew] = useState(crewData[0]);

  const handleTabChange = (crew) => {
    setSelectedCrew(crew);
  };

  return (
    <div className="crew-home-page">
      <div className="main-crew-container">
        <h1 className="meet-your-crew">
          <strong>02</strong> Meet your crew
        </h1>
        <div className="crew-content">
          <div className="crew-details">
            <div className="crew-info">
              <h2 className="crew-role">{selectedCrew.role}</h2>
              <h3 className="crew-name">{selectedCrew.name}</h3>
              <p className="crew-bio">{selectedCrew.bio}</p>
            </div>
            <nav>
              <ul>
                {crewData.map((crew) => (
                  <li
                    key={crew.id}
                    className={selectedCrew.id === crew.id ? "active" : ""}
                    onClick={() => handleTabChange(crew)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        handleTabChange(crew);
                      }
                    }}
                  ></li>
                ))}
              </ul>
            </nav>
          </div>
          <div id={`crew-panel-${selectedCrew.id}`} className="crew-image">
            <img src={selectedCrew.image} alt={selectedCrew.name} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crew;
