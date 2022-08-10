import React, { useState } from 'react';
import HeroElements from '../components/HeroElements';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const Home = () => {
    const [isOpen, setisOpen] = useState(false);

    const toggle = ()=>{
        setisOpen(!isOpen);
    }
  return (
    <>
    <Sidebar isOpen={isOpen} toggle={toggle}/>
    <Navbar toggle={toggle}/>
    <HeroElements/>
    </>
  )
}

export default Home