import React, { useState } from 'react';
import { homeObjOne, homeObjThree, homeObjTwo } from '../components/Data';
import Footer from '../components/Footer';
import HeroElements from '../components/HeroElements';
import InfoSection from '../components/InfoSection';
import Navbar from '../components/Navbar';
import Services from '../components/Services';
import Sidebar from '../components/Sidebar';


const Home = ({user, setUser}) => {
    const [isOpen, setisOpen] = useState(false);
    
    const toggle = ()=>{
        setisOpen(!isOpen);
    }
  return (
    <>
    <Sidebar isOpen={isOpen} toggle={toggle}/>
    <Navbar toggle={toggle} user={user} setUser={setUser}/>
    <HeroElements/>
    <InfoSection {...homeObjOne}/>
    <InfoSection {...homeObjTwo}/>
    <Services/>
    <InfoSection {...homeObjThree}/>
    <Footer/>
    </>
  )
}

export default Home