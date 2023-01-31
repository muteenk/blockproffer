// import './App.css';
import { Routes, Route} from 'react-router-dom';
import Home from './components/home/Home';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import PNF from './components/errors/PNF';
import Createpoll from './components/createpoll/Createpoll';
import Livepolls from './components/livepolls/Livepolls';
import Pollquestion from './components/pollquestion/Pollquestion';
import Success from './components/createpoll/Success';


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
        <Route path="/success" element={<Success />} />
        <Route path="*" element={<PNF />} />
      </Routes>
    </>
  );
}

export default App;
