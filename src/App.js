import Featured from './components/Featured';
import TopNav from './components/TopNav'
import Facilities from './components/Facilities'
import Range from './components/Range';
import Clients from './components/Clients';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import Bussiness from './components/Bussiness';


function App() {
  return (
    <div className="App">
      <TopNav/>
      <Featured/>
      <AboutUs/>
      <Facilities/>
      <Range/>
      <Bussiness/>
      <Clients/>
      <Newsletter/>
      <Footer/>
    </div>
  );
}

export default App;
