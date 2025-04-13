import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import AvailablePuppies from './pages/AvailablePuppies/AvailablePuppies';
import About from './pages/About/About';
import ParentDogs from './pages/ParentDogs/ParentDogs';
import Contact from './pages/Contact/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/available-puppies" element={<AvailablePuppies />} />
            <Route path="/about" element={<About />} />
            <Route path="/parent-dogs" element={<ParentDogs />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
