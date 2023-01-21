import './App.css';
import Header from './components/header/Header';
import {Routes, Route} from 'react-router-dom';
import Home from './components/home/Home';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import error404 from './components/errors/404';
import Createpoll from './components/createpoll/Createpoll';


function App() {
  return (
    <>
      <Header />
      <Home />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/livepolls" element={<h1>Live Polls</h1>} />
        <Route path="/createpolls" element={<Createpoll />} />
        <Route path="*" element={<error404 />} />
      </Routes>
    </>
  );
}

export default App;
