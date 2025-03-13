import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import Home1 from './pages/Home1';
import Certificate from './pages/Certificate';
import Certificate1 from './pages/Certificate1';
import GnaturesHome from './pages/GnaturesHome';
import GnaturesCert from './pages/GnaturesCert';
import Ginsti from './pages/Ginsti';
import GinstiHome from './pages/GinstiHome';
import GSCHome from './pages/GSCHome';
import GSCCert from './pages/GSCCert';
import GIHUB_BioCoding from './pages/GIHUB_BioCoding';
import BioCoding_Cert from './pages/BioCoding_Cert';




function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home1/>} />
        <Route path="/certificate" element={<Certificate/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/certificate1" element={<Certificate1/>} />
        <Route path="/gnatureshome" element={<GnaturesHome/>} />
        <Route path="/gnaturescert" element={<GnaturesCert/>} />
        <Route path="/ginsti" element={<Ginsti/>} />
        <Route path="/ginstihome" element={<GinstiHome/>} />
        <Route path="/gschome" element={<GSCHome/>} />
        <Route path="/gsccert" element={<GSCCert />} />
        <Route path="/gihubbiocoding" element={<GIHUB_BioCoding />} />
        <Route path="/biocodingcert" element={<BioCoding_Cert />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
