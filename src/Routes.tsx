import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Products from './Components/Products';
import NotFound from './Components/Notfound';

export default function __Router(){
    return(
        <Router>
            <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/Products" element={<Products/>}/>
            <Route path="*" element={<NotFound/>}/>

            </Routes>
        </Router>
    )
}