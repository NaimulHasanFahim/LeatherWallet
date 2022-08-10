import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "./pages/Home";

const App = ()=>{
    return (
    <BrowserRouter>
        <Routes>
            {/* <Route path="/nav" element={<Navbar/>}/> */}
            <Route path="/" element={<Home/>}/>
            {/* <Route element={<PageNotFound/>}/> */}
        </Routes>
    </BrowserRouter>
    )
}

export default App;