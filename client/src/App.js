import React, { useState } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "./pages/Home";
import Profile from './pages/Profile';
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
const App = ()=>{

    const [user, setUser] = useState(useSelector(state=>state.user.currentUser));
    const [isOpen, setisOpen] = useState(false);
    const toggle = ()=>{
        setisOpen(!isOpen);
    }
    console.log(user);
    
    return (
    <BrowserRouter>
        <Routes>
            {/* <Route path="/nav" element={<Navbar/>}/> */}
            <Route path="/" element={<Home user={user} setUser={setUser} isOpen={isOpen} toggle={toggle}/>}/>
            <Route path="/signin" element={<Signin user={user} setUser={setUser}/>}/>
            <Route path="/signup" element={<Signup user={user} setUser={setUser}/>}/>
            <Route path="/profile" element={<Profile user={user} setUser={setUser} isOpen={isOpen} toggle={toggle}/>}/>
            
            {/* <Route element={<PageNotFound/>}/> */}
        </Routes>
    </BrowserRouter>
    )
}

export default App;