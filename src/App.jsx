import './index.css'
import { Route, Routes } from 'react-router-dom';
import Home from './routes/home/Home';
import Destination from './routes/destination/Destination';
import Crew from './routes/crew/Crew';
import Technology from './routes/technology/Technology';
import Navbar from './components/header/Navbar';


function App() {
  return (
    <div className='app-container'>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
   </div>
  )
}

export default App
