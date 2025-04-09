
import './App.css';
import Footer from './pages/footer';
import Homepage from './pages/homepage';
import Navbar from './pages/navbar';
import 'font-awesome/css/font-awesome.min.css';

function App() {
  return (
    <div className="App">
     <Navbar />
     <Homepage />
     <Footer />
    </div>
  );
}

export default App;
