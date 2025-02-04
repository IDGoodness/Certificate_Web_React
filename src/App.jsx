import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import Home1 from './pages/Home1';
import Certificate from './pages/certificate';
import Certificate1 from './pages/certificate1';



function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home1/>} />
        <Route path="/certificate" element={<Certificate/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/certificate1" element={<Certificate1/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
