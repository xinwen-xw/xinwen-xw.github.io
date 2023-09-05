import React from 'react';
import { Routes, Route, HashRouter } from "react-router-dom";
import MainPage from './pages/index';
import './styles/styles.scss';

function App() {
  return (

    <HashRouter>
      <Routes>
        <Route exact path="/" element={<MainPage/>}/>
      </Routes>
    </HashRouter>
  );
}

export default App;
