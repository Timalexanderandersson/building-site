
import './App.css';
import Footer from './pages/footer';
import Homepage from './pages/homepage';
import Navbar from './pages/navbar';
import 'font-awesome/css/font-awesome.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router> 
      <div className="App">
        <Navbar />
        <Routes> 
          <Route path="/" element={<Homepage />} /> 
          <Route path="/kontakt" element={<div>Kontakt</div>} /> 
          <Route path="/offert" element={<div>Offert</div>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
