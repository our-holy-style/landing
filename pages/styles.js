import styled from 'styled-components'
import heroBg from '../assets/images/hero-bg.png';


const Container = styled.div`
    width:100%;
`;

const Header = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid rgba(0, 0, 0, 0.21);
    margin: 17px 20px 0px 20px;
    height: 70px;
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
    font-size: 22px;
    width: 251px;
    height: 54px;
    border-radius: 19px;
    cursor: pointer;
`;

const Hero = styled.section`
    background: url(${heroBg});
    height: calc(100vh - 71px);
    background-size: cover;
    background-position-y: -49px;
    background-position-x: 60px;
`;

const HeroContent = styled.div`
    display: flex;
    justify-content: center;
    height: 100%;
    align-items: center;
    flex-direction: column;
    h1{
        font-family: 'BillyOhio';
        color: #5b5b5f;
        font-weight: 300;
        font-size: 134px;
        margin: 0;
        height: 142px;
    }
    h3{
        font-family: 'BodoniXT';
        color: #5b5b5f;
        font-weight: 300;
        font-size: 74px;
        margin: 0;
    }
    h4{
        font-family: 'Helvetica';
        color: #5b5b5f;
        font-weight: 300;
        font-size: 32px;
        margin: 0;
    }
`;


const HeroImages = styled.div`
    display: flex; 
    align-items: center;
    justify-content: space-around;
    width: 64%;
`;

const Shapes = styled.img`
    width: 309px;
    align-self: flex-end;
`;

const LogoIso = styled.img`
    width: 150px;
`;

const ScrollIcon = styled.img`
    width: 28px;
    margin-top: 4%;
    cursor: pointer;
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
};