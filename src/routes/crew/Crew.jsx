import { useState } from "react";
import "./Crew.css";
import crewData from "../../data/crew.js";
import Tabs from "../../components/tabs/Tabs.jsx";

const Crew = () => {
  const [selectedCrew, setSelectedCrew] = useState(crewData[0]);

  return (
    <div className="page-container crew-home-page">
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
            <Tabs
              items={crewData}
              selectedItem={selectedCrew}
              onTabChange={setSelectedCrew}
              renderTabLabel={() => ""}
              className="crew-tab-buttons"
            />
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
