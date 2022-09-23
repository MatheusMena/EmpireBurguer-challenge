import './App.css';
import Atendimento from './components/atendimento/Atendimento';
import Footer from './components/footer/Footer';
import GoogleMaps from './components/googleMaps/GoogleMaps';
import Menu from './pages/menu/Menu';
import Ofertas from './pages/ofertas/Ofertas';

function App() {
  return (
    <div className="App">
    <Menu/>
   <Ofertas/> 
   <Atendimento />
   <GoogleMaps />
   <br/>
   <Footer />
   <hr></hr>
    </div>
  );
}

export default App;
