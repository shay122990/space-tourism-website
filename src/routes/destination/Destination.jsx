import { useState } from 'react';
import './Destination.css';
import Navbar from '../../components/header/Navbar';
import TabsMenu from '../../components/tab-menu/TabsMenu';
import destinationsData from '../../data/destinations.json';
console.log(destinationsData)
const Destination = () => {
  const [selectedDestination, setSelectedDestination] = useState(destinationsData.destinations[0]);

  const handleMenuItemClick = (destination) => {
    setSelectedDestination(destination); // Update selected destination content
  };

  console.log('Selected Destination:', selectedDestination); // Log selectedDestination

  return (
    <div className='destination-container'>
      <Navbar />
      <p><span>01</span> Pick your destination</p>
      <TabsMenu menuItems={destinationsData.destinations} onMenuItemClick={handleMenuItemClick} />
      
      <div className='destination-content'>
        <h2>{selectedDestination.name}</h2>
        <img src={selectedDestination.images.webp} alt={selectedDestination.name} />
        <p>{selectedDestination.description}</p>
        <p>Distance: {selectedDestination.distance}</p>
        <p>Travel Time: {selectedDestination.travel}</p>
      </div>
    </div>
  );
};

export default Destination;
