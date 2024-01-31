// import { Carousel } from 'bootstrap';
import './App.css';
import Navbar from './Pages/Homepage/Navbar';
import Slider from './Pages/Homepage/Slider';
import Cards from './Pages/Homepage/Cards';
import Discount from './Pages/Homepage/Discount';
import NewArrivals from './Pages/Homepage/NewArrivals';
import BestSales from './Pages/Homepage/BestSales';
import Footer from './Pages/Homepage/Footer';

function App() {
  return (
    <div className="App">
       <Navbar/>
       <Slider/>
       {/* <Carousel/> */}
       <Cards/>
       <Discount/>
       <NewArrivals/>
       <BestSales/>
       <Footer/>
    </div>
  );
}
export default App;
