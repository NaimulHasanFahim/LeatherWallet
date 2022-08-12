import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const FooterContainer = styled.footer`
background-color: #101522;
`;
const FooterWrapper = styled.div`
padding: 48px 24px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
max-width: 1100px;
margin: 0 auto;
`;

const FooterLinkContainer = styled.div`
display: flex;
justify-content: center;

@media screen and (max-width: 820px){
    padding-top: 32px;
}
`;

const FooterLinkWrapper = styled.div`
display: flex;

@media screen and (max-width: 820px){
    flex-direction: column;
}
`;

const FooterLinkItems = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
margin: 16px;
text-align: left;
width: 160px;
box-sizing: border-box;
color: #fff;

@media screen and (max-width: 420px){
    margin: 0;
    padding: 10px;
    width: 100%;
}

`;

const FooterLinkTitle = styled.h1`
font-size: 14px;
margin-bottom: 16px;
`;

const FooterLink = styled(Link)`
color: #fff;
text-decoration: none;
margin-bottom: 0.5rem;
font-size: 14px;

&:hover{
    color: #01bf71;
    transition: 0.3s ease-out;
}

`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterLinkContainer>
          <FooterLinkWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="/sigin">How it works</FooterLink>
              <FooterLink to="/sigin">Testimonials</FooterLink>
              <FooterLink to="/sigin">Careers</FooterLink>
              <FooterLink to="/sigin">Investors</FooterLink>
              <FooterLink to="/sigin">Terms of Services</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Contact Us</FooterLinkTitle>
              <FooterLink to="/sigin">Contact</FooterLink>
              <FooterLink to="/sigin">Support</FooterLink>
              <FooterLink to="/sigin">Destination</FooterLink>
              <FooterLink to="/sigin">Sponsorship</FooterLink>
              {/* <FooterLink to="/sigin">Terms of Services</FooterLink> */}
            </FooterLinkItems>
          </FooterLinkWrapper>

          <FooterLinkWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Videos</FooterLinkTitle>
              <FooterLink to="/sigin">Submit Video</FooterLink>
              <FooterLink to="/sigin">Ambassadors</FooterLink>
              <FooterLink to="/sigin">Agency</FooterLink>
              <FooterLink to="/sigin">Influencer</FooterLink>
              <FooterLink to="/sigin">Face of brand</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Scoial Media</FooterLinkTitle>
              <FooterLink to="/sigin">Instagram</FooterLink>
              <FooterLink to="/sigin">Facebook</FooterLink>
              <FooterLink to="/sigin">Youtube</FooterLink>
              <FooterLink to="/sigin">Twitter</FooterLink>
              <FooterLink to="/sigin">Linkdin</FooterLink>
            </FooterLinkItems>
          </FooterLinkWrapper>
        </FooterLinkContainer>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
