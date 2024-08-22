import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/header/Navbar";
import Home from "./routes/home/Home";
import Destination from "./routes/destination/Destination";
import Crew from "./routes/crew/Crew";
import Technology from "./routes/technology/Technology";

const Layout = () => (
  <>
    <Navbar />
    <Routes>
      <Route index element={<Home />} />
      <Route path="/destination" element={<Destination />} />
      <Route path="/crew" element={<Crew />} />
      <Route path="/technology" element={<Technology />} />
    </Routes>
  </>
);

const App = () => {
  return (
    <Router>
      <Layout />
    </Router>
  );
};

export default App;
