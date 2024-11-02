// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Main />} /> 
                <Route path="/alta" element={<div>Alta Page (puedes crear un componente específico)</div>} />
                <Route path="/contacto" element={<div>Contacto Page (puedes crear un componente específico)</div>} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
