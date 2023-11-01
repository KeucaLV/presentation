import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage.js';
import SlideM from './components/SlideM.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/slideM" element={<SlideM />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
