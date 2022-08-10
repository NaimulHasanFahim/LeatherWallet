import React, { useState } from 'react';
import { MdArrowForward, MdKeyboardArrowRight } from 'react-icons/md';
import styled from 'styled-components';
import { Button } from './ButtonElement';


const HeroContainer = styled.div`
background: #0c0c0c;
/* background: red; */
display: flex;
justify-content: center;
align-items: center;
padding: 0 30px;
/* height: 800px; */
height: 100vh;
/* position: relative; */
z-index: 1;
`;

const HeroBg = styled.div`
position: absolute;
top: 0;
right: 0;
border: 0;
left: 0;
height: 100vh;
width: 100%;
/* background: green; */
overflow: hidden;
`;

const VideoBg = styled.video`
width: 100%;
height: 100vh;
object-fit: cover;
-o-object-fit: cover;
background: #232a34;
`;

const HeroContent = styled.div`
z-index: 3;
/* background: green; */
max-width: 1200px;
position: absolute;
padding: 8px 24px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

const HeroH1 = styled.h1`
color: #fff;
font-size: 48px;
text-align: center;

@media screen and (max-width: 768px){
    font-size: 40px;
}

@media screen and (max-width: 768px){
    font-size: 32px;
}

`;

const HeroP = styled.p`
margin-top: 24px;
color: #fff;
font-size: 24px;
text-align: center;
max-width: 600px;

@media screen and (max-width: 768px){
    font-size: 24px;
}

@media screen and (max-width: 768px){
    font-size: 18px;
}
`;

const HeroBtnWrapper = styled.div`
margin-top: 32px;
display: flex;
flex-direction: column;
align-items: center;
`;

const ArrowForward = styled(MdArrowForward)`
margin-left: 8px;
font-size: 20px;
`;

const ArrowRight = styled(MdKeyboardArrowRight)`
margin-left: 8px;
font-size: 20px;
`;



const HeroElements = () => {
    const [hover, setHover] = useState(false);
    const onHover = () =>{
        setHover(!hover);
    }

  return (
    <HeroContainer>
        {/* <HeroBg> */}
            {/* <VideoBg autoPlay loop muted src={Video} type='video/mp4'/> */}
        {/* </HeroBg> */}
        <HeroContent>
            <HeroH1>
                Online Banking Made Easy
            </HeroH1>
            <HeroP>
                Sign up for a new account today and recieve exciting vouchers.
            </HeroP>
            <HeroBtnWrapper>
                <Button to="signup" primary="true" dark="true" onMouseEnter={onHover} onMouseLeave={onHover}>
                    Get started {hover ? <ArrowForward/> : <ArrowRight/>}
                </Button>
            </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroElements