import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import Home1 from './pages/Home1';
import Certificate from './pages/Certificate';
import Certificate1 from './pages/Certificate1';
import GnaturesHome from './pages/GnaturesHome';
import GnaturesCert from './pages/GnaturesCert';
import Ginsti from './pages/Ginsti';



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
      </Routes>
    </BrowserRouter>
  )
}

export default App
