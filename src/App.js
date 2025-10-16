import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './Pages/HomePage';
import JewelryListPage from './Pages/JewelryListPage';
import JewelryDetails from './Pages/JewelryDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/jewelry" element={<JewelryListPage />} />
            <Route path="/jewelry/:id" element={<JewelryDetails />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;