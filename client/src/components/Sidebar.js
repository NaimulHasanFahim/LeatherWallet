import React from "react";
import { FaTimes } from "react-icons/fa";
import { Link as LinkR } from "react-router-dom";
import { Link as Links } from 'react-scroll';
import styled from "styled-components";
const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #0d0d0d;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

const SidebarWrapper = styled.div`
color: #fff;
`;

const SidebarMenu = styled.ul`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(6, 80px);
text-align: center;
justify-content: center;
/* background: blue; */

@media screen and (max-width : 480px){
    grid-template-rows: repeat(6, 60px);

}
`;

const SidebarLink = styled(Links)`
display: flex;
align-items: center;
font-size: 1.5rem;
justify-content: center ;
text-decoration: none;
list-style: none;
transition: 0.2s ease-in-out;
color: #fff;
cursor: pointer;
&:hover{
    color: #01bf71;
    transition: 0.2s ease-in-out;
}
`;

const SidebarBtnWrap = styled.div`
display: flex;
/* background: red; */
justify-content: center;
/* align-items: center; */
`;

const SidebarRoute = styled(LinkR)`
border-radius: 50px;
background: #01bf71;
white-space: nowrap;
padding: 16px 30px;
color: #010606;
font-size: 1.3rem;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
justify-content: center;

&:hover{
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
}
`;

const Sidebar = ({toggle, isOpen}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
          <SidebarLink to="discover" onClick={toggle}>Discover</SidebarLink>
          <SidebarLink to="services" onClick={toggle}>Services</SidebarLink>
          <SidebarLink to="signup" onClick={toggle}>Sign Up</SidebarLink>
        </SidebarMenu>
        <SidebarBtnWrap>
          <SidebarRoute to="/signin">Sign In</SidebarRoute>
        </SidebarBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
