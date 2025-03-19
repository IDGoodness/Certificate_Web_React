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
import Ginsti2 from './pages/ginsti2';
import Ginstihome2 from './pages/Ginstihome2';
import NotAllowed from './pages/NotAllowed';
import OwerriHome from './pages/OwerriHome';
import OwerriCert from './pages/OwerriCert';


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
        <Route path="/ginsti2" element={<Ginsti2 />} />
        <Route path="/ginstihome2" element={<Ginstihome2 />} />
        <Route path="/notallowed" element={<NotAllowed />} />
        <Route path='/owerrihome' element={<OwerriHome />} />
        <Route path='/owerriCert' element={<OwerriCert />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
