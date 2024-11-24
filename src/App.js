import React from 'react';
import { BrowserRouter as Router, Routes, Route } from
'react-router-dom';
import './App.css';
import PageReact from './pages/PageReact';
import PageJS from './pages/PageJS';


function App() {
  
  return (
    <>
    <Router>
      <Routes>
        <Route index element={<PageReact />} />
        <Route path='/react' element={<PageReact />} />
        <Route path='/js' element={<PageJS />} />
      </Routes>
    </Router>
    </>
  );
}


export default App;