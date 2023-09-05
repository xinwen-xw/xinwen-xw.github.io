import React from 'react';
import { Routes, Route, HashRouter } from "react-router-dom";
import MainPage from './pages/index';
import CompFab from './pages/compfab';
import './styles/styles.scss';

function App() {
  return (

    <HashRouter>
      <Routes>
        <Route exact path="/" element={<MainPage/>}/>
        <Route exact path="/compfab" element={<CompFab/>}/>
      </Routes>
    </HashRouter>
  );
}

export default App;
