import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import {Oppenheimer} from './pages/oppenheimer';
import {Home} from './pages/home';
import { Pathaan } from './pages/pathaan';
import { Bro } from './pages/bro';
import { Navbar } from './pages/navbar';
import { Hindi } from './pages/hindi';
import { English } from './pages/english';
import { Telugu } from './pages/telugu';
import { John } from './pages/john';
import { Shezam } from './pages/shezam';
import { Ranga } from './pages/rangabali';
import { Baby } from './pages/baby';
import { Bhola } from './pages/bhola';
import { Bhai } from './pages/bhaijaan';
import { Footer } from './pages/footer';

function App() {
   
  return (
    <div className="Map">
    <Router>
       <Navbar/>
    
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/hindi" element={<Hindi/>}/>
          <Route path="/english" element={<English/>}/>
          <Route path="/telugu" element={<Telugu/>}/>
          <Route path="/oppenheimer" element={<Oppenheimer/>} />
          <Route path="/john" element={<John/>} />
          <Route path="/shezam" element={<Shezam/>} />
          <Route path="/pathaan" element={<Pathaan/>} />
          <Route path="/bhola" element={<Bhola/>} />
          <Route path="/bhaijaan" element={<Bhai/>} />
          <Route path="/bro" element={<Bro/>} />
          <Route path="/baby" element={<Baby/>} />
          <Route path="/rangabali" element={<Ranga/>} />
        

      </Routes>
        <Footer/>
      </Router>
      </div>
  );
}

export default App;
