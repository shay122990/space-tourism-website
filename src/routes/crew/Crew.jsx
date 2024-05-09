import { useState } from "react";
import "./Crew.css";
import crewData from "../../data/crew.js";

const Crew = () => {
  const [selectedCrewMember, setSelectedCrewMember] = useState(crewData[0]);

  const handleTabChange = (crewMember) => {
    setSelectedCrewMember(crewMember);
  };

  return (
    <div className="crew-home-container">
      <div className="crew-content-container">
        <div className="crew-content">
          <div className="crew-info">
            <span className="meet-your-crew">
              <strong>02</strong> Meet your crew
            </span>
            <div className="crew-details">
              <h2 className="crew-role">{selectedCrewMember.role}</h2>
              <h3 className="crew-name">{selectedCrewMember.name}</h3>
              <p className="crew-bio">{selectedCrewMember.bio}</p>
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
          </div>
          <div className="crew-image">
            <img src={selectedCrewMember.image} alt={selectedCrewMember.name} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crew;
{
  /* <div className="crew-content-container">
        <span className="meet-your-crew">
          <strong>02</strong> Meet your crew
        </span>
        <div className="crew-info-container">
          <div className="crew-image">
            <img src={selectedCrewMember.image} alt={selectedCrewMember.name} />
          </div>
          {crewData.map((crewMember) => (
            <button
              key={crewMember.id}
              className={
                selectedCrewMember.id === crewMember.id ? "active" : ""
              }
              onClick={() => handleTabChange(crewMember)}
            >
              <span>.</span>
            </button>
          ))}
        </div>
        <div className="crew-content">
          <h2>{selectedCrewMember.name}</h2>
          <p>{selectedCrewMember.role}</p>
          <p>{selectedCrewMember.bio}</p>
        </div>
      </div> */
}
