import './App.css';
import Footer from './Components/Footers/Footer';
import Hero from "./Components/Hero";
import Join from './Components/Join/Join';
import Plan from './Components/Plans/Plan';
import Program from './Components/Programs/Program';
import Reason from './Components/Reasons/Reason';
import Testimoni from './Components/Testimononials/Testimoni';

function App() {
  return (
    <div className="App">
          <Hero />
          <Program />
          <Reason />
          <Plan />
          <Testimoni />
          <Join />
          <Footer />
    </div>
  );
}

export default App;
