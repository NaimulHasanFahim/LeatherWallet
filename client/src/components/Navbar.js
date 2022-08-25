import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { useDispatch } from "react-redux";
import { Link as LinkR, useNavigate } from 'react-router-dom';
import { animateScroll as scroll, Link as LinkS } from 'react-scroll';
import styled from 'styled-components';
import { signout } from "../actions/auth";
const Nav = styled.nav`
    background: ${({scrollNav})=>(scrollNav? '#000' : 'transparent')};
    height: 80px;
    margin-top: -80px;
    display: flex ;
    justify-content: center ;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    @media screen and (max-width : 960px){
        transition: 0.8s all ease;
    }
`;

const NavbarContainer = styled.div`
    display: flex ;
    justify-content: space-between ;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`;

const NavLogo = styled(LinkR)`
    /* color: red; */
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;

`;

const MobileIcon = styled.div`
    display: none;
    @media screen and (max-width : 768px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`;

const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px){
        display: none;
    }
`;

const NavItem = styled.li`
    height: 80px;
`;


const NavLinks = styled(LinkS)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    &.active{
        border-bottom: 3px solid #01bf71;
    }
`;


const NavLinkR = styled(LinkR)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    &.active{
        border-bottom: 3px solid #01bf71;
    }
`;

const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px){
        display: none;
    }
`;


const NavBtnSignout = styled.button`
border-radius: 50px;
background: #01bf71;
white-space: nowrap;
color: #010606;
text-decoration: none;
padding: 10px 22px;
outline: none;
font-size: 16px;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
&:hover{
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
}
`;

const NavBtnLinks = styled(LinkR)`
    border-radius: 50px;
    background: #01bf71;
    white-space: nowrap;
    color: #010606;
    text-decoration: none;
    padding: 10px 22px;
    outline: none;
    font-size: 16px;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover{
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`;


const Navbar = ({toggle, user, setUser}) => {
    const [scrollNav, setScrollNav] = useState(false);
   
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // console.log(user);
  const Signout =( )=>{
    dispatch(signout(navigate, setUser)
    );
  }
 
    const changeNav = () =>{
        if(window.scrollY>=80){
            setScrollNav(true)
        }
        else{
            setScrollNav(false)
        }
    }
    useEffect(()=>{
        window.addEventListener('scroll', changeNav);
    },[scrollNav]);

    const toggleHome = ()=>{
        scroll.scrollToTop();
    }
  return (
    <>
     <Nav scrollNav={scrollNav}>
        <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>
                dolla
            </NavLogo>
            <MobileIcon onClick={toggle}>
                <FaBars/>
            </MobileIcon>
            <NavMenu>
                <NavItem>
                    <NavLinks to="about" 
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    >About</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="discover"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}>Discover</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="services"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    >Services</NavLinks>
                </NavItem>
                {user==null ? (<NavItem>
                    <NavLinks to="signup"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    >Sign Up</NavLinks>
                </NavItem>) : (<NavItem>
                    <NavLinkR to="/profile"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    >Profile</NavLinkR>
                </NavItem>)}
                
                
            </NavMenu>

            {user == null ? (<NavBtn>
                <NavBtnLinks to="/signin">Sign In</NavBtnLinks>
            </NavBtn>) : (<NavBtn>
                <NavBtnSignout  onClick={Signout}>Sign Out</NavBtnSignout>
            </NavBtn>)}
        </NavbarContainer>
     </Nav>

    </>
  )
}

export default Navbar