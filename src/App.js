// import { Carousel } from 'bootstrap';
import './App.css';
import Navbar from './Pages/Homepage/Navbar';
import Footer from './Pages/Homepage/Footer'
import RoutingAll from './Pages/Routing/RoutingAll';
function App() {
  return (
    <div className="App">
      <Navbar/>
        <RoutingAll/> 
      <Footer/>
    </div>
  );
}
export default App;
