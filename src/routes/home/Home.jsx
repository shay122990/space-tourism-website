import "./Home.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <main className="home-container">
      <div className="space-info-container">
        <main className="main-info">
          <p className="intro">So, you want to travel to</p>
          <h1 className="space"> Space</h1>
          <p className="space-info">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </main>
        <div className="explore-btn-container">
          <Link to="/destination">
            <button className="explore-btn">Explore</button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Home;
