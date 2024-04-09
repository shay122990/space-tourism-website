
import './Home.css';
const Home = () => {

  return (
    <div className="home-container">
     <div className="home-info-container">
      <div className="space-info-container">
        <div className="main-info">
        <h2 className='intro'>So, you want to travel to</h2>
          <span className='space'> Space</span>
          <p className='space-info'>Let’s face it; if you want to go to space, you might as well genuinely go to 
          outer space and not hover kind of on the edge of it. Well sit back, and relax 
          because we’ll give you a truly out of this world experience!
           </p>
        </div>
        <div className="explore-btn-container">
          <button className='explore-btn'>Explore</button>
        </div>
      </div>
     </div>
    </div>
  )
}

export default Home
