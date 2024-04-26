import { useState } from "react";
import "./Crew.css";
import crewData from "../../data/crew.js";

const Crew = () => {
  const [selectedCrewMember, setSelectedCrewMember] = useState(crewData[0]);

  const handleTabChange = (crewMember) => {
    setSelectedCrewMember(crewMember);
  };

  return (
    <div className="crew-container">
      <div className="crew-info-container">
        <p>
          <span>02</span> Meet your crew
        </p>
        <div className="crew-tab-buttons">
          {crewData.map((crewMember) => (
            <button
              key={crewMember.id}
              className={
                selectedCrewMember.id === crewMember.id ? "active" : ""
              }
              onClick={() => handleTabChange(crewMember)}
            >
              {crewMember.name}
            </button>
          ))}
        </div>
        <div className="crew-content">
          <h2>{selectedCrewMember.name}</h2>
          <p>{selectedCrewMember.role}</p>
          <img src={selectedCrewMember.image} alt={selectedCrewMember.name} />
          <p>{selectedCrewMember.bio}</p>
        </div>
      </div>
    </div>
  );
};

export default Crew;
