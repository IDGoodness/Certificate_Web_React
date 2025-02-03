import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import Certificate from './pages/certificate';
import Certificate1 from './pages/certificate1';



function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/certificate" element={<Certificate/>} />
        <Route path="/certificate1" element={<Certificate1/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
