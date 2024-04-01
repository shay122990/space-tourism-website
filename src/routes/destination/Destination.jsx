import  { useState } from 'react';
import './Destination.css';
import Navbar from '../../components/header/Navbar';
import TabsMenu from '../../components/tab-menu/TabsMenu';
import destinationsData from '../../data/destinations.json';

const Destination = () => {
  const [selectedDestinationIndex, setSelectedDestinationIndex] = useState(0);

  const handleMenuItemClick = (index) => {
    setSelectedDestinationIndex(index);
  };

  const selectedDestination = destinationsData.destinations[selectedDestinationIndex];

  return (
    <div className='destination-container'>
      <Navbar />
      <p><span>01</span> Pick your destination</p>
      <TabsMenu menuItems={destinationsData.destinations} onTabChange={handleMenuItemClick} />
      <div className='destination-content'>
        <h2>{selectedDestination.name}</h2>
        {console.log(selectedDestination.images.webp)}

        <img src={selectedDestination.images} alt={selectedDestination.name} />
        <p>{selectedDestination.description}</p>
        <p>Distance: {selectedDestination.distance}</p>
        <p>Travel Time: {selectedDestination.travel}</p>
      </div>
    </div>
  );
};

export default Destination;
