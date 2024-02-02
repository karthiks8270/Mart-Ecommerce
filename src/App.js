// import { Carousel } from 'bootstrap';
import './App.css';
import Discount from './Pages/Homepage/Discount';
import Navbar from './Pages/Homepage/Navbar';
import Cards from './Pages/Homepage/Cards'
import NewArrivals from './Pages/Homepage/NewArrivals'
import BestSales from './Pages/Homepage/BestSales'
import Footer from './Pages/Homepage/Footer'
import Slider from './Pages/Homepage/Slider'
import RoutingAll from './Pages/Routing/RoutingAll';
function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <Slider/>
      <Cards/> */}
      {/* <Discount/> */}
        <RoutingAll/> 
      {/* <NewArrivals/>
      <BestSales/>  */}
      <Footer/>
    </div>
  );
}
export default App;
