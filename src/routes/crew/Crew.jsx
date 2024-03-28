import { useState } from 'react';
import Navbar from '../../components/header/Navbar'
import TabsMenu from '../../components/tab-menu/TabsMenu';
import './Crew.css'
import crew1 from '../../assets/crew/image-douglas-hurley.webp'
import crew2 from '../../assets/crew/image-mark-shuttleworth.webp'
import crew3 from '../../assets/crew/image-victor-glover.webp'
import crew4 from '../../assets/crew/image-anousheh-ansari.webp'

const Crew = () => {
  const [selectedContent, setSelectedContent] = useState('crew1');
  const crewMenuItems = [
    { id: 'crew1',
     title: 'Crew 1', 
     image: crew1,
    },
    { id: 'content1', title: 'Content 1' , image:crew2},
    { id: 'content2', title: 'Content 2' , image:crew3},
    { id: 'content3', title: 'Content 3' ,image:crew4}
  ];

  const handleMenuItemClick = (contentId) => {
    setSelectedContent(contentId);
  };

  return (
    <div className='crew-container'>
      <Navbar/>
      <p> <span>02</span>Meet your crew</p>
      <TabsMenu menuItems={crewMenuItems} onMenuItemClick={handleMenuItemClick} />
      {selectedContent === 'crew1' && (
        <div>
          Default Content
          <img src={crew1} alt="" />
        </div>
      )}
      {selectedContent === 'content1' && (
        <div>
          Content 1
          <img src={crew2} alt="" />
        </div>
      )}
      {selectedContent === 'content2' && (
        <div>
          Content 2
          <img src={crew3} alt="" />
        </div>
      )}
      {selectedContent === 'content3' && (
        <div>
          Content 3
          <img src={crew4} alt="" />
        </div>
      )}
    </div>
  );
};

export default Crew;
