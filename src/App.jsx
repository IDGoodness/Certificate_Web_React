import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import Certificate from './pages/Certificate';


function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/certificate" element={<Certificate/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
