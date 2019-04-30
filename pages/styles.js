import styled from 'styled-components'
import heroBg from '../assets/images/hero-bg.png';

import downBg from '../assets/images/down-bg.png';

const Container = styled.div`
    width:100%;
`;

const Header = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid rgba(0, 0, 0, 0.21);
    height: 66px;
    margin: 0;
    margin-top:8px;
    padding: 6px 20px;
    `;

const Logo = styled.img`
    width: 207px;
    margin: 0 12px;
    align-self: center;
    position: relative;
    bottom: 11px;
`

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
`;

const LinkHeader = styled.h3`
    border-left: 1px solid #000;
    padding: 4px 19px;
    font-family: Helvetica;
    font-size: 22px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    color: #5b5b5f;
    margin: 0;
`;

const Button = styled.button`
    background: #7d3c7d;
    border: none;
    color: #fff;
    font-size: ${({large}) => large ? '32px' : '22px'} ;
    width: ${({large}) => large ? '374px' : '251px'} ;
    height: ${({large}) => large ? '80px' : '54px'} ;
    border-radius: 19px;
    cursor: pointer;
`;

const FirstBackground = styled.div`
    background: url(${heroBg});
    height: 134vh;
    position: absolute;
    width: 100%;
    background-repeat: no-repeat
    background-size: cover;
    background-position-y: -104px;
    background-position-x: 60px;
    z-index:0;
    `;

const SecondBackground = styled.div`
    background: url(${downBg});
    height: 200vh;
    position: absolute;
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position-y: 242px;
    background-position-x: -204px;
    z-index: 0;    `;

const Hero = styled.section`
    height: calc(100vh - 95px);
    z-index:1;
    position:relative;
`;

const HeroContent = styled.div`
    display: flex;
    justify-content: center;
    height: 100%;
    width: ${({width}) => width || 'auto'};
    align-items: center;
    z-index:1;
    flex-direction: column;
    h1{
        font-family: 'BillyOhio';
        color: #5b5b5f;
        font-weight: 300;
        font-size: 149px;
        margin: 0;
        height: 142px;
        text-align:center;
    }
    h3{
        font-family: 'BodoniXT';
        color: #5b5b5f;
        font-weight: 300;
        font-size: 102px;
        margin: 0;
        text-align:center;
    }
    h4{
        font-family: 'Helvetica';
        color: #5b5b5f;
        font-weight: 300;
        font-size: 42px;
        margin: 0;
        text-align:center;
        letter-spacing: -1.08px;
    }
`;


const HeroImages = styled.div`
    display: flex; 
    align-items: center;
    justify-content: space-around;
    width: 870px;
`;

const Shapes = styled.img`
    width: 368px;
    align-self: flex-end;
`;

const LogoIso = styled.img`
    width: 157px;
`;

const ScrollIcon = styled.img`
    width: 24px;
    margin-top: 4%;
    cursor: pointer;
    position:relative;
    z-index:1;
`;

const LandingSection = styled.section`
    height: ${({height}) => height || '100vh'};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const BigParagraph = styled.h5`
    font-family: 'Helvetica';
    color: #666666;
    font-size: 47px;
    letter-spacing: -1.2px;
    width: 1000px;
    font-weight: 300;
    letter-spacing: -1.08px;
    text-align: center;
    strong {
        font-size: 64px;
        font-weight: 900;
    }
`;

const Footer = styled.footer`
    width: 100%;
    height: 90px;
    background: #86305a;
    color: #fff;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 36px;
    font-family: 'Helvetica';
`;

const FooterSection = styled.div`
    display: flex;
    align-items: center;
`;

export { 
    Container,
    Header,
    Logo,
    LinkHeader,
    Button,
    LogoContainer,
    Hero,
    HeroContent,
    HeroImages,
    Shapes,
    LogoIso,
    ScrollIcon,
    LandingSection,
    BigParagraph,
    Footer,
    FooterSection,
    FirstBackground,
    SecondBackground,
};