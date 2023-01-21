import './App.css';
import Header from './components/header/Header';
import { Routes, Route} from 'react-router-dom';
import Home from './components/home/Home';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import PNF from './components/errors/PNF';
import Createpoll from './components/createpoll/Createpoll';
import Livepolls from './components/livepolls/Livepolls';
import Pollquestion from './components/pollquestion/Pollquestion';
import HowItWorks from './components/home/HowItWorks';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/livepolls" element={<Livepolls/>} />
        <Route path="/createpolls" element={<Createpoll />} />
        <Route path="/pollquestion" element={<Pollquestion />} />
        <Route path="/howitworks" element={<HowItWorks />} />
        <Route path="*" element={<PNF />} />
      </Routes>
    </>
  );
}

export default App;
