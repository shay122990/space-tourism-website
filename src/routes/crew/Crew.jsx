import Navbar from '../../components/header/Navbar'
// import TabsMenu from '../../components/tab-menu/TabsMenu';
import './Crew.css'

const Crew = () => {
 
  return (
    <div className='crew-container'>
      <Navbar/>
      <p> <span>02</span>Meet your crew</p>
      {/* <TabsMenu menuItems={selectedCrew.crew} onTabChange={handleMenuItemClick} /> */}
      
    </div>
  );
};

export default Crew;
