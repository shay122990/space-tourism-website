import './Destination.css';
import destinationsData from '../../data/destinations.js'; 

const Destination = () => {
  return (
    <div className='destination-container'>
      <div className="destinations-info-container">
      <p><span>01</span> Pick your destination</p>
      {destinationsData.map(destination => (
        <div key={destination.id} className='destination-content'>
          <h2>{destination.name}</h2>
          <p>{destination.description}</p>
          <img src={destination.image} alt="" />   
          <p>{destination.distance}</p>
          <p>{destination.travel}</p>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Destination;
