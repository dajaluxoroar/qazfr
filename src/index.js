import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import Home from './components/Home';
import {Routes,Route,} from "react-router-dom";
import About from './components/About';
import Rwr from './components/Rwr';
import About2 from './components/About2';
import About3 from './components/About3';
import About4 from './components/About4';
import About5 from './components/About5';
import About6 from './components/About6';
import About7 from './components/About7';
import About8 from './components/About8';
import About9 from './components/About9';
import About10 from './components/About10';


const root1 = ReactDOM.createRoot(document.getElementById('root'));
const root2 = ReactDOM.createRoot(document.getElementById('root1'));
root1.render(
  <React.StrictMode>
  <Router>
  <Routes> 
      <Route path="/welcome" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/about2" element={<About2 />} />
      <Route path="/b1Wq4Yv9Ox6Rz2Pj8Gk3Hl7Km0Iy5Ns1Vx2Gu6Qr9Tp0Bw7Jh4Eg5Zl8Fz0Xn9" element={<About4 />} />
      <Route path="/z7Bm4Sx1Gv8Yh3Oq6Wk2Tn0Rl5Hg9Aq7Iu6Jp0Ew8Vr3Xy2Fz0Pb9Nl4" element={<About5 />} />
      <Route path="/jHr2Yc5Gp0Kv8Rq3Ix9Wu6Sg1Tm4Fv7Xy2Nl3Zk9Qo1Ew0Hj8Aq7Lx6Gz0Pb5Tn9" element={<About6 />} />
      <Route path="/iGq3Ov8Wx5Ry2Gz9Jp1Th4Xw7Vl9Yk0Ux6Vr1Lc8Kj7Ig5Pq2Bm3Ez0Hn9" element={<About7 />} />
      <Route path="/k9Ux0Wc3Jg8Km1Yz7Pv4Hr2Tl6Iq0Ew5Np9Gj8Xs3Bh7Aq2" element={<About8 />} />
      <Route path="/about9" element={<About9 />} />
      <Route path="/about10" element={<About10 />} />
      <Route path="/" element={<App />} />
    </Routes>
    </Router>
  </React.StrictMode>
);

if (root2) {
  root2.render(
    <React.StrictMode>
    <Router>
    <Routes> 
        <Route path="/pVt2Gk8Aq4Jm1Ew7Sx3Lc5Ov9Iu6Qy0Nz9Rp7Xh4Yg1Tb0Hw8Jr5Kx2Gz0Pn9" element={<Rwr />} />
        <Route path="/v8Rq3Ix9Wu6Sg1Tm4Fv7Xy4Xw7Vl9Yk0Ux6Vr1Lc8Kj7Ig5Pq2Bm3Ez0HYg1T" element={<About3 />} />
      </Routes>
      </Router>
    </React.StrictMode>
  );
}
