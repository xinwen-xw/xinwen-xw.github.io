import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './pages/index';
import CompFab from './pages/compfab';
import './styles/styles.scss';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<MainPage/>}/>
        <Route exact path="/compfab" element={<CompFab/>}/>
      </Routes>
    </Router>
  );
}

export default App;
