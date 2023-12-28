
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Homepage from './Components/HomePage/Homepage';
import { Routes, Route } from 'react-router-dom';
import AboutPage from './Components/Aboutpage/AboutPage';
import ServicePage from './Components/ServicePage/ServicePage';
import ContactPage from './Components/ContactPage/ContactPage';
import WhatsAppButton from './Components/Pages/WhatsAppButton ';
import Gallery from './Components/Gallery/Gallery';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/About' element={<AboutPage />} />
        <Route path='/Service' element={<ServicePage />} />
        <Route path='/Gallery' element={<Gallery/>}/>
        <Route path='/Contact' element={<ContactPage />} />
      </Routes>
      <WhatsAppButton/>


    </div>
  );
}

export default App;
