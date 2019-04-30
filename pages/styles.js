import styled from 'styled-components'
import heroBg from '../assets/images/hero-bg.png';
import downBg from '../assets/images/down-bg.png';
import breakpoint from 'styled-components-breakpoint';

const Container = styled.div`
    width:100%;
`;

const Header = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid rgba(0, 0, 0, 0.21);
    height: 33px;
    margin: 0;
    margin-top: 4px;
    padding: 5px 16px;
    ${breakpoint('desktop')`
        height: 53px;
        margin-top: 6px;
    `}    
    `;

const Logo = styled.img`
    width:104px;
    margin: 0 12px;
    align-self: center;
    position: relative;
    bottom: 6px;
    ${breakpoint('desktop')`
        width: 165px;
        bottom: 9px;
    `}    
    `

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
`;

const LinkHeader = styled.h3`
    border-left: 1px solid #000;
    padding: 4px 7px;
    font-family: NeueMontreal;
    font-size: 11px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    color: #5b5b5f;
    margin: 0;
    ${breakpoint('desktop')`
        padding: 4px 19px;
        font-size: 18px;
    `}    
    `;

const Button = styled.button`
    background: #7d3c7d;
    border: none;
    color: #fff;
    border-radius: 12px;
    cursor: pointer;
    font-size: ${({large}) => large ? '16px' : '10px'} ;
    width: ${({large}) => large ? '187px' : '126px'} ;
    height: ${({large}) => large ? '40px' : '27px'} ;
    ${breakpoint('desktop')`
        font-size: ${({large}) => large ? '26px' : '18px'} ;
        width: ${({large}) => large ? '300px' : '200px'} ;
        height: ${({large}) => large ? '64px' : '43px'} ;
    `}    

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
    z-index: 0;
    bottom:0;    `;

const Hero = styled.section`
    height: calc(100vh - 64px);
    z-index:1;
    position:relative;
`;

const HeroContent = styled.div`
    display: flex;
    justify-content: center;
    height: 100%;
    width: 100%;
    align-items: center;
    z-index:1;
    flex-direction: column;
    h1{
        font-family: 'BillyOhio';
        color: #5b5b5f;
        font-weight: 300;
        margin: 0;
        font-size: 75px;
        height: 72px;
        text-align:center;
        ${breakpoint('desktop')`
            font-size: 119px;
            height: 114px;
         `}
    }
    h3{
        font-family: 'Bodoni';
        color: #5b5b5f;
        font-weight: 300;
        font-size: 51px;
        margin: 0;
        text-align:center;
        ${breakpoint('desktop')`
            font-size: 82px;
         `}
    }
    h4{
        font-family: 'NeueMontreal';
        color: #5b5b5f;
        width: 100%;
        font-weight: 300;
        font-size: 21px;
        margin: 0;
        text-align:center;
        letter-spacing: -1.08px;
        ${breakpoint('desktop')`
            width: 1000px;
            font-size: 34px;
        `}    
     }
`;


const HeroImages = styled.div`
    display: flex; 
    align-items: center;
    justify-content: space-around;
    width: 311px;
    ${breakpoint('desktop')`
        width: 696px;
    `}    
`;

const Shapes = styled.img`
    width: 120px;
    align-self: flex-end;
    display: ${({hideOnMobile}) => hideOnMobile ? 'none' : 'flex'};
    ${breakpoint('desktop')`
        width: 295px;
        display: flex;
    `}    
`;

const LogoIso = styled.img`
    width: 79px;
    ${breakpoint('desktop')`
        width: 126px;
    `}    

    `;

const ScrollIcon = styled.img`
    width: 24px;
    margin-top: 3%;
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
    font-family: 'NeueMontreal';
    color: #666666;
    font-size: 24px;
    letter-spacing: -1.2px;
    margin: 10px;
    width: 90%;
    font-weight: 300;
    letter-spacing: -1.08px;
    text-align: center;
    z-index:1;
    strong {
        font-size: 32px;
        font-weight: 900;
    }
    ${breakpoint('desktop')`
        width: 1000px;
        font-size: 38px;
        strong{
            font-size: 51px;
        }
        `}
    `;

const Footer = styled.footer`
    width: 100%;
    height: 45px;
    background: #86305a;
    color: #fff;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 18px;
    font-family: 'NeueMontreal';
    svg{
        width: 18px;
        height: 18px;
    }
    ${breakpoint('desktop')`
        height: 72px;
        font-size: 29px;
        svg{
            width: 29px;
            height: 29px;
        }    
    `}    

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