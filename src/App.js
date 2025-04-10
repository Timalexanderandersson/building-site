
import './App.css';
import Footer from './pages/footer';
import Homepage from './pages/homepage';
import Navbar from './pages/navbar';
import 'font-awesome/css/font-awesome.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutUs from './pages/aboutus';


function App() {
  return (
    <Router> 
      <div className="App">
        <Navbar />
        <Routes> 
          <Route path="/" element={<Homepage />} /> 
          <Route path="/omoss" element={<AboutUs />} /> 
          <Route path="/tjänster" element={<div>tjänster</div>} />
          <Route path="/kontakt" element={<div>kontakt</div>} /> 
          <Route path="/offert" element={<div>Offert</div>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
