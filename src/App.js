import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Home from "./Routes/Home"
import CoinPage from './Routes/CoinPage';

function App() {
  return (
    <Router>
        <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/:id' element={<CoinPage />} />
      </Routes>
    </Router>
  );
}

export default App;
