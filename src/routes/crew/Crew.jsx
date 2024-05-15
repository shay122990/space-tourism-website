//
import { useState } from "react";
import "./Crew.css";
import crewData from "../../data/crew.js";

const Crew = () => {
  const [selectedCrewMember, setSelectedCrewMember] = useState(crewData[0]);

  const handleTabChange = (crewMember) => {
    setSelectedCrewMember(crewMember);
  };

  return (
    <div className="crew-home-page">
      <main className="main-crew-container">
        <h1 className="meet-your-crew">
          <strong>02</strong> Meet your crew
        </h1>
        <div className="crew-content">
          <div className="crew-details">
            <div className="crew-info">
              <h2 className="crew-role">{selectedCrewMember.role}</h2>
              <h3 className="crew-name">{selectedCrewMember.name}</h3>
              <p className="crew-bio">{selectedCrewMember.bio}</p>
            </div>
            <nav
              className="crew-tab-menu"
              role="navigation"
              aria-label="Crew Tabs"
            >
              <ul role="tablist">
                {crewData.map((crewMember) => (
                  <li key={crewMember.id} role="presentation">
                    <button
                      role="tab"
                      tabIndex={0}
                      className={
                        selectedCrewMember.id === crewMember.id ? "active" : ""
                      }
                      onClick={() => handleTabChange(crewMember)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          handleTabChange(crewMember);
                        }
                      }}
                      aria-selected={selectedCrewMember.id === crewMember.id}
                      aria-controls={`crew-panel-${crewMember.id}`}
                      id={`crew-tab-${crewMember.id}`}
                    ></button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div
            id={`crew-panel-${selectedCrewMember.id}`}
            role="tabpanel"
            aria-labelledby={`crew-tab-${selectedCrewMember.id}`}
            className="crew-image"
          >
            <img src={selectedCrewMember.image} alt={selectedCrewMember.name} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Crew;
