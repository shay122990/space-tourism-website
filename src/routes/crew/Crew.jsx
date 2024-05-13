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
            <div className="crew-tab-menu">
              {crewData.map((crewMember) => (
                <button
                  key={crewMember.id}
                  className={
                    selectedCrewMember.id === crewMember.id ? "active" : ""
                  }
                  onClick={() => handleTabChange(crewMember)}
                ></button>
              ))}
            </div>
          </div>
          <div className="crew-image">
            <img src={selectedCrewMember.image} alt={selectedCrewMember.name} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Crew;
